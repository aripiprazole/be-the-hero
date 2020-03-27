import { RequestHandler } from "express";

import connection from "../../database/Connection";

class ProfileController {
  store: RequestHandler;
  index: RequestHandler;

  constructor() {
    this.index = async (req, res) => {
      const authorization = req.headers.authorization;

      const incidents = await connection("incidents")
        .where("ong_id", authorization)
        .select("*");

      return res.send(incidents);
    };
  }
}

export default new ProfileController();
