const db = require('./database.model.js');

const Basket = function(basket) {
  this.user_id = basket.user_id;
  this.product_id = basket.product_id;
};

Basket.create = (newBasket, result) => {
  db.query('INSERT INTO basket SET ?', [newBasket], (error, dbResult) => {
    if (error) {
      return result(error, null);
    }

    return result(null, { id: dbResult.insertId, ...newBasket });
  });
};

Basket.findById = (userId, result) => {
  db.query(
    `SELECT * FROM basket WHERE user_id = ? `,
    [userId],
    (error, dbResult) => {
      if (error) {
        return result(error, null);
      }
      if (dbResult.length) {
        return result(null, dbResult);
      }
      return result({ kind: 'not_found' }, null);
    }
  );
};

module.exports = Basket;
