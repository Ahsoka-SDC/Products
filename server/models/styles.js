var db = require('../db');

var getStylesInfo = (product_id, callback) => {
  db.query('SELECT style_id, name, original_price, sale_price, default_style FROM styles WHERE product_id = $1', [product_id],
  (err, stylesResponse) => {
    if (err) {
      console.log(err);
      //callback(err, null);
      db.end();
    } else {
      console.log(stylesResponse.rows);
      db.end();
    }
  })
}

getStylesInfo(1);