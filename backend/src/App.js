/* @flow */

import Express from "express";
import cors from "cors";
import routes from "./Routes";

const PORT = process.env.PORT ? parseInt(process.env.PORT) : 8000;

class App {
  app: Express.Application;

  constructor() {
    this.app = new Express();
    this.app.use(Express.json());
    this.app.use(cors({}));
    this.routes();
  }

  routes() {
    this.app.use(routes);
  }

  start() {
    this.app.listen(PORT, () => {
      console.log("Server started successfully!");
    });
  }
}

export default App;
