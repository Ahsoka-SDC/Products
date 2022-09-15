DROP TABLE products, features, styles, skus, photos, related;


CREATE TABLE products (
  id INT NOT NULL,
  name VARCHAR(100) NOT NULL,
  slogan VARCHAR(1000),
  description VARCHAR(10000),
  category VARCHAR(100),
  default_price VARCHAR(100),

  PRIMARY KEY(id)
);


CREATE TABLE features (
  id INT NOT NULL,
  product_id INT,
  feature VARCHAR(200),
  value VARCHAR(200),

  PRIMARY KEY(id),
  FOREIGN KEY(product_id) REFERENCES products(id)

);

CREATE TABLE styles (
  id INT NOT NULL,
  product_id INT,
  name VARCHAR(200),
  sale_price VARCHAR(100),
  original_price VARCHAR(100),
  default_style INT,

  PRIMARY KEY(id),
  FOREIGN KEY(product_id) REFERENCES products(id)

);

CREATE TABLE skus (
  id INT NOT NULL,
  styleId INT,
  size VARCHAR(10),
  quantity VARCHAR(100),

  PRIMARY KEY(id),
  FOREIGN KEY(styleId) REFERENCES styles(id)

);

CREATE TABLE photos (
  id INT NOT NULL,
  styleId INT,
  thumbnail_url VARCHAR(100000),
  url VARCHAR(100000),

  PRIMARY KEY(id),
  FOREIGN KEY(styleId) REFERENCES styles(id)

);

CREATE TABLE related (
  id INT NOT NULL,
  current_product_id INT,
  current_related_id INT,

  PRIMARY KEY(id)

);





/*  Execute this file from the command line by typing:
 *    psql -d products < server/schema.sql
 *  to create the tables.*/

