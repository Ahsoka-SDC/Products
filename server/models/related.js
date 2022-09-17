var db = require('../db');

var getRelatedInfo = (id, callback) => {
  db.query('SELECT current_related_id FROM related WHERE current_product_id = $1', [id], (err, relatedResponse) => {
    if (err) {
      //console.log(err);
      callback(err, null);
    } else {
      var relatedProductIds = [];

      relatedResponse.rows.forEach((relatedIdObject) => {
        relatedProductIds.push(relatedIdObject.current_related_id);
      })

      callback(null, relatedProductIds);
    }
  })

}


module.exports = { getRelatedInfo };