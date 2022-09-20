const { Pool } = require('pg');
require('dotenv').config();


const pool = new Pool({
  host: 'ec2-18-222-198-230.us-east-2.compute.amazonaws.com',
  database: 'products',
  user: 'nickadam',
  password: process.env.PGPASSWORD,
  port: '5432'
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
