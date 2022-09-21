var db = require('../db');

var getRelatedInfo = (id, callback) => {
  db.query('select array_agg(current_related_id) from related where current_product_id = $1', [id], (err, relatedResponse) => {
    if (err) {
      callback(err, null);
    } else {
      if (relatedResponse.rows[0].array_agg === null) {
        callback(null, []);
      } else {
        callback(null, relatedResponse.rows[0].array_agg);
      }
    }
  })

}


module.exports = { getRelatedInfo };