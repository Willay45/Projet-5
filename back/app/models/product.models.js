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

Product.findProductTag = result => {
  db.query(
    'SELECT p.name, p.description, p.url, p.quantity, t.tag_id, ta.tag_name FROM product as p JOIN product_has_tag as t ON t.product_id = p.id JOIN tag as ta ON ta.id = t.tag_id',
    (error, dbResult) => {
      if (error) {
        return result(error, null);
      }
      return result(null, dbResult);
    }
  );
};

Product.findById = (productId, result) => {
  db.query(
    `SELECT * FROM product WHERE id = ${productId}`,
    (error, dbResult) => {
      if (error) {
        return result(error, null);
      }

      if (dbResult.length) {
        return result(null, dbResult[0]);
      }

      return result({ kind: 'not_found' }, null);
    }
  );
};

module.exports = Product;
