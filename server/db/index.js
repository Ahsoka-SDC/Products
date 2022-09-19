const { Pool } = require('pg');

const pool = new Pool({
  database: 'products',
  user: 'nickadam',
  password: process.env.PGPASSWORD
});

pool.connect(err => {
    if (err) {
      console.error('connection error', err.stack)
    } else {
      console.log('connected')
    }
  }
)


module.exports = pool;
