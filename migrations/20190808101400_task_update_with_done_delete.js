const table_name = "what";

exports.up = function(knex, Promise) {
    return knex.schema.alterTable(table_name, (table) => {
          table.boolean('done').notNullable().default(false);
          table.boolean('delete').notNullable().default(false);
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.alterTable(table_name, (table) => {
        table
            .dropColumn('done')
            .dropColumn('delete');
  });
};