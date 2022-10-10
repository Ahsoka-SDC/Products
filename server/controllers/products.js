var models = require('../models');

var defaultCorsHeaders = {
  'access-control-allow-origin': '*',
  'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'access-control-allow-headers': 'content-type, accept, authorization',
  'access-control-max-age': 10 // Seconds.
};

module.exports.get = (req, res) => {

  // headers
  res.set('Content-Type', 'application/json');
  res.set(defaultCorsHeaders);

  // retrieve data and send response
  if (req.query.page) {
    var page = req.query.page;
  } else {
    var page = 1;
  }

  if (req.query.count) {
    var count = req.query.count;
  } else {
    var count = 5;
  }

  models.products.getProducts(page, count, (err, productsData) => {
    if (err) {
      res.status(500).end();
    } else {
      res.status(200).send(productsData);
    }
  })

}