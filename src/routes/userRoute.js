import express from "express";
import userService from "../services/userServices.js";

const userRouter = express.Router();
const userservice = new userService();



userRouter.post('/user/create', userservice.create);

userRouter.get('/user', userservice.findAll);

userRouter.get('/user/random', userservice.shortURL);

export default userRouter;
