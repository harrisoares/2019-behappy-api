
exports.up = function(knex, Promise) {
  return knex.schema.createTable("tasks", (table) => {
        table.increments('oid').primary();
        table.string('title').notNullable();
        table.string('description').notNullable();
        table.timestamps();
      });
  };

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("tasks");
  };
