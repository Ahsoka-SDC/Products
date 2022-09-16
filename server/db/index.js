const { Pool } = require('pg');

const pool = new Pool({
  database: 'products',
  user: 'nickadam',
  max: 500000
});

pool.connect(err => {
    if (err) {
      console.error('connection error', err.stack)
    } else {
      console.log('connected')
    }
  }
)

// client.query('SELECT * FROM pg_catalog.pg_tables', (err, res) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(res);
//   }
// })

module.exports = pool;


// client.query('SELECT * FROM messages', (err, res) => {
//   console.log(res.rows)
//   client.end()
// })