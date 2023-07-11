import User from "../models/UserModel.js";
import bcrypt from "bcrypt";

export const saveUser = async (req, res) => {
    const { name, email, password } = req.body;
    try {
      const saltRounds = 10;
      const hashedPassword = await bcrypt.hash(password, saltRounds);
      
      const user = new User({
        name: name,
        email: email,
        password: hashedPassword
      });
      const insertedUser = await user.save();
      res.status(201).json(insertedUser);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };  

export const loginUser = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      const passwordMatch = await user.matchPassword(password);
      if (passwordMatch) {
        res.json({
          _id: user._id,
          name: user.name,
          email: user.email,
          __v: user.__v
        });
      } else {
        res.status(401).json({ error: 'Email atau password salah' });
      }
    } else {
      res.status(401).json({ error: 'Email atau password salah' });
    }
  };  