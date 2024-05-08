import mongoose from "mongoose";

const shortURLSchema = new mongoose.Schema({
  longUrl: {
    type: String,
    required: true
  },
  shortUrl: {
    type: String,
    required: true,
  },
  code: {
    type: String,
    required: true,
  },
  CreateonUtc: {
    type: Date,
    require: true,
    default: Date.now()
  }
})

export const ShortURL = mongoose.model('shorturl', shortURLSchema)
