module.exports = {
  development: {
    username: 'beaver_king',
    password: 123,
    database: 'beaver_kingdom',
    host: '127.0.0.1',
    dialect: 'postgres',
  },
  test: {
    username: 'root',
    password: null,
    database: 'database_test',
    host: '127.0.0.1',
    dialect: 'mysql',
  },
  production: {
    username: 'postgres',
    password: '6UVtsBWlvvhFBfW1',
    database: 'postgres',
    host: 'db.qjnrlepijpvzyiejnjbh.supabase.co',
    dialect: 'postgres',
  },
};
