// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://wkhhmwlczmhzhi:fo2Gmf0vYX4HuGGOoASS7XdSAS@ec2-54-83-61-45.compute-1.amazonaws.com:5432/dfofh46ecrdlj1?ssl=true'
  },

  // staging: {
  //   client: 'postgresql',
  //   connection: {
  //     database: 'my_db',
  //     user:     'username',
  //     password: 'password'
  //   },
  //   pool: {
  //     min: 2,
  //     max: 10
  //   },
  //   migrations: {
  //     tableName: 'knex_migrations'
  //   }
  // },
  //
  // production: {
  //   client: 'postgresql',
  //   connection: {
  //     database: 'my_db',
  //     user:     'username',
  //     password: 'password'
  //   },
  //   pool: {
  //     min: 2,
  //     max: 10
  //   },
  //   migrations: {
  //     tableName: 'knex_migrations'
  //   }
  // }

};
