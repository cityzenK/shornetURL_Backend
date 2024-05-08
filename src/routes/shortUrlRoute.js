import express from "express";
import shortenedURLService from "../services/shortenerURLService.js";
import userRouter from "./userRoute.js";

const shortRouter = express.Router();
const shortservice = new shortenedURLService();


userRouter.post('/url/create', shortservice.create);

userRouter.get('/url/:shortUrl', shortservice.getShortURL);

userRouter.get('/url', shortservice.getAllShortURL);

export default shortRouter;
