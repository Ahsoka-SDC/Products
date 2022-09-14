const { Client } = require('pg');

const client = new Client({
  database: 'products',
  user: 'nickadam'
});

client.connect(err => {
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

module.exports = client;


// client.query('SELECT * FROM messages', (err, res) => {
//   console.log(res.rows)
//   client.end()
// })