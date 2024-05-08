import { ShortURL } from "../models/shortenedURLModel.js";
import { randomURL } from "../utils/randomURL.js";

export default class shortenedURLService {
  async create(req, res) {
    try {
      const rand = randomURL()
      const data = await ShortURL.create({
        longUrl: req.body.url,
        shortUrl: `http://${req.hostname}/api/${rand}`,
        code: rand
      });
      return res.json(data);
    } catch (err) {
      res.status(500).send({
        message:
          err.messega || "Error to add this url"
      })
    }
  }

  async getShortURL(req, res) {
    try {
      const shortUrl = await ShortURL.findOne({ code: req.params.shortUrl });
      console.log(shortUrl)
      if (shortUrl == null) {
        return res.sendStatus(404);
      }
      res.redirect(shortUrl.longUrl);
    } catch (err) {
      res.status(500).send({
        message:
          err.message || "Error to find the shortUrl"
      })
    }
  }

  async getAllShortURL(req, res) {
    try {
      const data = await ShortURL.find()
      console.log(data)
      return res.json(data)
    } catch (err) {
      res.status(500).send({
        messege:
          err.messege || "Error to find the links"
      });
    }
  }
};
