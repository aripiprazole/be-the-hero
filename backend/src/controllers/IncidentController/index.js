import { RequestHandler } from "express";

import connection from "../../database/Connection";

class IncidentController {
  store: RequestHandler;
  index: RequestHandler;
  delete: RequestHandler;

  constructor() {
    this.index = async (req, res) => {
      const { page = 1 } = req.query;

      const [count] = await connection("incidents").count();

      const ongs = await connection("incidents")
        .join("ongs", "ongs.id", "=", "incidents.ong_id")
        .limit(5)
        .offset((page - 1) * 5)
        .select([
          "incidents.*",
          "ongs.name",
          "ongs.email",
          "ongs.whatsapp",
          "ongs.city",
          "ongs.uf",
        ]);

      res.header("X-Total-Count", count["count(*)"]);

      return res.send(ongs);
    };

    this.delete = async (req, res) => {
      const { id } = req.params;

      const authorization = req.headers.authorization;

      const incident = await connection("incidents")
        .where("id", id)
        .select("ong_id")
        .first();

      if (incident?.ong_id !== authorization) {
        return res.status(401).send({ error: "Operation not permitted" });
      }

      await connection("incidents").where("id", id).delete();

      return res.status(204).send();
    };

    this.store = async (req, res) => {
      const { title, description, value } = req.body;

      const authorization = req.headers.authorization;

      const [id] = await connection("incidents").insert({
        title,
        description,
        value,
        ong_id: authorization,
      });

      return res.send({ id });
    };
  }
}

export default new IncidentController();
