var db = require('../db');
var format = require('pg-format');

// use Promise.all to optimize speed?

var getStylesInfo = (product_id, callback) => {
  db.query('SELECT style_id, name, original_price, sale_price, "default?" FROM styles WHERE product_id = $1', [product_id],
  (err, stylesResponse) => {
    if (err) {
      console.log(err);
      //callback(err, null);
    } else {
      var stylesData = stylesResponse.rows;
      var styleIds = [];

      stylesData.forEach((style) => {
        styleIds.push(style.style_id);
      })

      let photosQuery = format('SELECT styleId, thumbnail_url, url FROM photos WHERE styleId IN (%L)', styleIds)

      db.query(photosQuery,
      (err, photosResponse) => {
        if (err) {
          console.log(err);
          //callback(err, null);
        } else {
          var photosData = photosResponse.rows;

          let skusQuery = format('SELECT id, styleId, quantity, size FROM skus WHERE styleId IN (%L)', styleIds)

          db.query(skusQuery,
          (err, skusResponse) => {
            if (err) {
              console.log(err);
              //callback(err, null);
            } else {
              skusData = skusResponse.rows;

              stylesData.forEach((style) => {
                style.photos = [];
                style.skus = {};
                photosData.forEach((photo) => {
                  if (style.style_id === photo.styleid) {
                    delete photo.styleid;
                    style.photos.push(photo);
                  }
                })
                skusData.forEach((sku) => {
                  if (style.style_id === sku.styleid) {
                    style.skus[sku.id] = {
                      quantity: sku.quantity,
                      size: sku.size
                    }
                  }
                })
              })

              var outputStyleInfo = {
                product_id: product_id.toString(),
                results: stylesData
              }

              callback(null, outputStyleInfo);
            }
          })
        }
      })
    }
  })
}

module.exports = { getStylesInfo };