var db = require('../db');


var getProductInfo = (id, callback) => {
  db.query(`
  select json_build_object(
    'id', p.id,
    'name', p.name,
    'slogan', p.slogan,
    'description', p.description,
    'category', p.category,
    'default_price', p.default_price,
    'features', (
      select json_agg(json_build_object(
        'feature', fe.feature,
        'value', fe.value
      ))
      from features fe where fe.product_id = p.id
    )
  ) as result
  from products p
  where p.id = $1`,
  [id], (err, productResponse) => {
    if (err) {
      callback(err, null);
    } else {
      if (productResponse.rows.length === 0) {
        callback(null, `This product does not exist`);
      } else {
        callback(null, productResponse.rows[0].result);
      }
    }
  })
}



module.exports = { getProductInfo };