const { Pool } = require('pg');
const pool = new Pool({
  user: 'georgewilman',
  host: 'localhost',
  database: 'george_website',
  port: 5432
});

module.exports = {
  query: (text, params, callback) => {
    return pool.query(text, params, callback);
  }
};
