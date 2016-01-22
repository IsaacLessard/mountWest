
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('client', function(table){
      table.increments();
      table.string('name');
      table.string('phone');
      table.string('contact_name');
      table.string('email')
    }),
    knex.schema.createTable('feedback', function(table){
      table.increments();
      table.integer('rating');
      table.boolean('arrive_early');
      table.boolean('set_up');
      table.integer('confidence');
      table.integer('satisfaction');
      table.integer('value');
      table.text('comments');
      table.text('other_events');
    }),
    knex.schema.createTable('employee', function(table){
      table.increments();
      table.string('first_name');
      table.string('last_name');
    })
  ]).then(function(){
    return knex.schema.createTable('event', function(table){
      table.increments();
      table.integer('client_id').unsigned().references('id').inTable('client').onDelete('cascade');
      table.integer('employee_id').unsigned().references('id').inTable('employee').onDelete('cascade');
      table.integer('feedback_id').unsigned().references('id').inTable('feedback').onDelete('cascade');
      table.date('date');
    })
    })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('event').then(function(){
    return Promise.all([
      knex.schema.dropTable('employee'),
      knex.schema.dropTable('feedback'),
      knex.schema.dropTable('client')
    ])
  })
};
