import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import userRouter from './routes/userRoute.js';
import shortRouter from './routes/shortUrlRoute.js';

dotenv.config();
const app = express();
app.use(express.json());
app.use(userRouter);
app.use(shortRouter);

mongoose.connect(process.env.MONGODB_URL, {
  serverSelectionTimeoutMS: 5000
}).catch(err => console.log(err.reason));


const port = process.env.PORT;


app.listen(port, () => {
  console.log(`App running in port:${port}`)
})

