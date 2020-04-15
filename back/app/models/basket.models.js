const db = require('./database.model.js');

const Basket = function(basket) {
  this.user_id = basket.user_id;
  this.product_id = basket.product_id;
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
        return result(null, dbResult[0]);
      }
      return result({ kind: 'not_found' }, null);
    }
  );
};

module.exports = Basket;
