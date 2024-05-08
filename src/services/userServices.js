import { User } from "../models/userModel.js"
import { randomURL } from "../utils/randomURL.js";

export default class userService {

  async findAll(req, res) {
    try {
      const data = await User.find()
      return res.json(data)
    } catch (err) {
      res.status(500).send({
        messege:
          err.message || "Error in get Users"
      });
    }
  };

  async create(req, res) {
    try {
      const data = await User.create(req.body);
      return res.json(data);
    } catch (err) {
      res.status(500).send({
        messege:
          err.messege || "Error to add the user"
      });
    }
  };

  shortURL(req, res) {
    console.log(randomURL())
    return res.sendStatus(200)
  }
};


