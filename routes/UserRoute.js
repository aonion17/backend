import express from "express";
import { 
    saveUser, 
    loginUser,
} from "../controllers/UserController.js";

const router = express.Router();

router.post('/users', saveUser);
router.post('/users/login', loginUser);

export default router;