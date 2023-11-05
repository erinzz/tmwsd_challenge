const { Pool } = require('pg');

require('dotenv').config()

// ElephantSQL database URI
const PG_URI = process.env.PG_DB_URI;

// Initialize pool
const pool = new Pool({connectionString: PG_URI});
console.log('connected');

// Initialize message table
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


// Export model
module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback)
  },
};