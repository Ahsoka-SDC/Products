var db = require('../db');


var getProductInfo = (id, callback) => {
  db.query('SELECT * FROM products WHERE id = $1', [id], (err, productResponse) => {
    if (err) {
      console.log(err);
      callback(err, null);
    } else {
      db.query('SELECT feature, value FROM features WHERE product_id = $1', [id], (err, featuresResponse) => {
        if (err) {
          console.log(err);
          callback(err, null);
        } else {
          var productData = productResponse.rows[0];
          productData.features = featuresResponse.rows;
          callback(null, productData);

        }
      })
    }
  })
}

module.exports = { getProductInfo };