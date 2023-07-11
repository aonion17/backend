import  express  from "express";
import mongoose from "mongoose";
import cors from "cors";
import UserRoute from "./routes/UserRoute.js"
import CommentRoute from "./routes/CommentRoute.js"

const app = express();
mongoose.connect('mongodb+srv://root:bPHhytTMt5yVJMG6@cluster0.wm3nnlh.mongodb.net/user',{
    useNewUrlParser: true,
    UseUnifiedTopology: true
});
const db = mongoose.connection;
db.on('error', (error) => console.log(error));
db.once('open', ()=> console.log('Database Connected...'));

app.use(cors());
app.use(express.json());
app.use(UserRoute);
app.use(CommentRoute);

app.listen(5000, ()=> console.log('server up and running..'))