// @flow

import Knex from "knex";

export const up = (knex: Knex) => {
  return knex.schema.createTable("ongs", (table) => {
    table.string("id").primary().notNullable();
    table.string("name").notNullable();
    table.string("email").unique().notNullable();
    table.string("whatsapp").notNullable();
    table.string("city").notNullable();
    table.string("uf", 2).notNullable();
  });
};

export const down = (knex: Knex) => {
  return knex.schema.dropTable("ongs");
};
