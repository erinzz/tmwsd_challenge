const { Pool } = require('pg');

// elephantSQL database URI
const pgUrl = 'postgres://alfguear:EkAEG8_B8NI4rnfA65Ub4JY21payOBiS@bubble.db.elephantsql.com/alfguear';

const URI = process.env.PG_URI || pgUrl


const pool = new Pool({
  connectionString: URI,
});
console.log('connected');


//initialize message table
// message id
// message text
// message timestamp
pool.query(
  `CREATE TABLE IF NOT EXISTS msgs (
    _id SERIAL PRIMARY KEY,
    msg TEXT NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT NOW()
  )`;
).catch(err) => {
  console.log('An error occurred in creating message table:');
  console.log(err);
}


// export model
module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback)
  },
};