exports.up = function (knex, Promise) {
  return knex.schema.createTable('beaches', table => {
    table.increments();
    table.text('beachName').notNullable();
    table.text('island').notNullable();
    table.text('beachUrl').notNullable();
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('beaches');
};
