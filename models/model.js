const { Pool } = require('pg');

// elephantSQL database URI
const pgUrl = 'postgres://alfguear:EkAEG8_B8NI4rnfA65Ub4JY21payOBiS@bubble.db.elephantsql.com/alfguear';

const URI = process.env.PG_URI || pgUrl


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