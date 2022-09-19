DROP TABLE IF EXISTS products, features, styles, skus, photos, related;


CREATE TABLE products (
  id INT NOT NULL,
  name VARCHAR(100) NOT NULL,
  slogan VARCHAR(1000),
  description VARCHAR(10000),
  category VARCHAR(100),
  default_price VARCHAR(100),

  PRIMARY KEY(id)
);

CREATE INDEX products_id_idx ON products (id);


CREATE TABLE features (
  id INT NOT NULL,
  product_id INT,
  feature VARCHAR(200),
  value VARCHAR(200),

  PRIMARY KEY(id),
  FOREIGN KEY(product_id) REFERENCES products(id)

);

CREATE INDEX features_product_id_idx ON features (product_id);

CREATE TABLE styles (
  style_id INT NOT NULL,
  product_id INT,
  name VARCHAR(200),
  sale_price VARCHAR(100),
  original_price VARCHAR(100),
  "default?" INT,

  PRIMARY KEY(style_id),
  FOREIGN KEY(product_id) REFERENCES products(id)

);

CREATE INDEX styles_product_id_idx ON styles (product_id);


ALTER TABLE styles ALTER "default?" TYPE bool USING CASE WHEN "default?"=0 THEN FALSE ELSE TRUE END;

UPDATE styles SET sale_price = '0' WHERE sale_price = 'null';


CREATE TABLE skus (
  id INT NOT NULL,
  styleId INT,
  size VARCHAR(10),
  quantity INT,

  PRIMARY KEY(id),
  FOREIGN KEY(styleId) REFERENCES styles(style_id)

);

CREATE INDEX skus_styleId_idx ON skus (styleId);

CREATE TABLE photos (
  id INT NOT NULL,
  styleId INT,
  thumbnail_url VARCHAR(100000),
  url VARCHAR(100000),

  PRIMARY KEY(id),
  FOREIGN KEY(styleId) REFERENCES styles(style_id)

);

CREATE INDEX photos_styleId_idx ON photos (styleId);

CREATE TABLE related (
  id INT NOT NULL,
  current_product_id INT,
  current_related_id INT,

  PRIMARY KEY(id)

);

CREATE INDEX related_current_product_id_idx ON related (current_product_id);





/*  Execute this file from the command line by typing:
 *    psql -d products < server/schema.sql
 *  to create the tables.*/

