const db = require('../server/db');

const csvFilePath = './raw_data/product.csv';


db.query('\COPY products(id, name, slogan, description, category, default_price) FROM $1 with (format csv, header true)', [csvFilePath],
(err, res) => {
  if (err) {
    console.log(err);
  } else {
    console.log(res, 'complete');
  }

})



