const db = require('../server/db');

var loadCSV = (csvFilePath, table) => {
  db.query(`\COPY ${table} FROM '${csvFilePath}' with (format csv, header true)`,
  (err, res) => {
    if (err) {
      // console.log(err);
    } else {
      // console.log(res, 'complete');
    }

  })
}


// products
 loadCSV('/users/nickadam/documents/hackreactor/Products/raw_data/product.csv', 'products(id, name, slogan, description, category, default_price)')

// features
 loadCSV(`/users/nickadam/documents/hackreactor/Products/raw_data/features.csv`, 'features(id, product_id, feature, value)')

// styles
 loadCSV(`/users/nickadam/documents/hackreactor/Products/raw_data/styles.csv`, 'styles(style_id, product_id, name, sale_price, original_price, "default?")')

// skus
 loadCSV(`/users/nickadam/documents/hackreactor/Products/raw_data/skus.csv`, 'skus(id, styleId, size, quantity)')

// photos
 loadCSV(`/users/nickadam/documents/hackreactor/Products/raw_data/photos.csv`, 'photos(id, styleId, url, thumbnail_url)')

// related
 loadCSV(`/users/nickadam/documents/hackreactor/Products/raw_data/related.csv`, 'related(id, current_product_id, current_related_id)')







