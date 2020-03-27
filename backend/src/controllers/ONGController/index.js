import { RequestHandler } from "express";
import crypto from "crypto";

import connection from "../../database/Connection";

class ONGController {
  store: RequestHandler;
  index: RequestHandler;

  constructor() {
    this.index = async (req, res) => {
      const ongs = await connection("ongs").select("*");

      return res.send(ongs);
    };
    this.store = async (req, res) => {
      const { name, email, whatsapp, city, uf } = req.body;

      const id = crypto.randomBytes(4).toString("HEX");

      await connection("ongs").insert({
        name,
        email,
        whatsapp,
        city,
        uf,
        id,
      });

      return res.json({ id });
    };
  }
}

export default new ONGController();
