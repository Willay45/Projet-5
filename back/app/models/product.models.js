const db = require('./database.model.js');

const Product = function(product) {
  this.name = product.name;
  this.description = product.description;
  this.quantity = product.quantity;
  this.url = product.url;
};

Product.create = (newProduct, tags, result) => {
  db.query('INSERT INTO product SET ?', [newProduct], (error, dbResult) => {
    if (error) {
      return result(error, null);
    }
    result(null, { id: dbResult.insertId, ...newProduct });
    tags.map(tag =>
      db.query(
        'INSERT INTO product_has_tag SET ?',
        {
          product_id: dbResult.insertId,
          tag_id: tag
        },
        tagsError => {
          if (tagsError) {
            return result(tagsError, null);
          }
        }
      )
    );
    return result(null, { id: dbResult.insertId, ...newProduct });
  });
};

Product.findAll = result => {
  db.query('SELECT * FROM product', (error, dbResult) => {
    if (error) {
      return result(error, null);
    }
    return result(null, dbResult);
  });
};

module.exports = Product;
