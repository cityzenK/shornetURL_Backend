import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  _id: Number,
  name: String,
  role: String
});

export const User = mongoose.model('User', userSchema);
