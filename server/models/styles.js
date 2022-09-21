var db = require('../db');


var getStylesInfo = (product_id, callback) => {
  db.query(`
  select json_build_object(
    'product_id', cast($1 as varchar),
    'results', (
      select json_agg(json_build_object(
        'style_id', st.style_id,
        'name', st.name,
        'original_price', st.original_price,
        'sale_price', st.sale_price,
        'default?', st."default?",
        'photos', (
          select json_agg(json_build_object(
            'thumbnail_url', p.thumbnail_url,
            'url', p.url
          ))
          from photos p where p.styleId = st.style_id
        ),
        'skus', (
          select json_object_agg(sk.id, json_build_object(
            'quantity', sk.quantity,
            'size', sk.size
          ))
          from skus sk where sk.styleId = st.style_id
        )
      )
      ) as result from styles st where st.product_id = $2
    )
  )`, [product_id.toString(), product_id],
  (err, stylesResponse) => {
    if (err) {
      callback(err, null);
    } else {
      var styleData = stylesResponse.rows[0].json_build_object;

      callback(null, styleData);
    }
  })
}

module.exports = { getStylesInfo };