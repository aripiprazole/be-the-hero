import { RequestHandler } from "express";

import connection from "../../database/Connection";

class SessionController {
  store: RequestHandler;

  constructor() {
    this.store = async (req, res) => {
      const { id } = req.body;

      const ong = await connection("ongs")
        .where("id", id)
        .select("name")
        .first();

      if (!ong) {
        return res.status(400).send({ error: "Not found this ONG" });
      }

      return res.send(ong);
    };
  }
}

export default new SessionController();
