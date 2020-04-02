const Product = require('../models/product.models.js');

exports.findAll = (request, response) => {
  Product.findAll((error, data) => {
    if (error) {
      response.status(500).send({
        message: error.message || 'Some error occurred while retrieving Product.'
      });
    } else {
      response.send(data);
    }
  });
};