exports.up = function(knex, Promise) {
  return knex.schema.createTable('messages', function(tbl) {
    tbl.increments('_id');

    tbl.string('title', 100);
    tbl.string('textBody', 2000);
    tbl.enu('tags', []);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('messages');
};
