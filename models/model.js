const { Pool } = require('pg');

require('dotenv').config()

// elephantSQL database URI
const pgUrl = process.env.PG_DB_URI;

// initialize pool
const pool = new Pool({connectionString: URI});
console.log('connected');


//initialize message table
pool.query(
  `CREATE TABLE IF NOT EXISTS Bulletin (
    _id SERIAL PRIMARY KEY,
    message TEXT NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT NOW()
  )`
).catch((err) => {
  console.error('An error occurred in creating message table:');
  console.error(err);
})


// export model
module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback)
  },
};