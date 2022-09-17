var db = require('../db');

var getProducts = (page, count, callback) => {

  var offset = (page - 1) * count;

  db.query('SELECT * FROM products ORDER BY id LIMIT $1 OFFSET $2', [count, offset], (err, productsResponse) => {
    if (err) {
      //console.log(err);
      callback(err, null);
    } else {
      callback(null, productsResponse.rows);
    }
  })

}

module.exports = { getProducts };