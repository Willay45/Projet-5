const db = require('./database.model.js');

const Product = function(product) {
  this.name = product.name;
  this.description = product.description;
  this.quantity = product.quantity;
};

Product.findAll = result => {
  db.query('SELECT p.name, p.description, p.quantity, i.url, i.name FROM product as p JOIN image as i ON p.image_id = i.id', (error, dbResult) => {
    if (error) {
      return result(error, null);
    }
    return result(null, dbResult);
  });
};

module.exports = Product;
