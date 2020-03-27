import Config from "../../knexfile";
import Knex from "knex";

const connection = new Knex(Config.development);

export default connection;
