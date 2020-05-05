const Product = require('../models/product.models.js');

exports.create = (request, response) => {
  if (!request.body) {
    return response.status(400).send({
      message: 'Content can not be empty!'
    });
  }
  const product = new Product({
    name: request.body.name ? request.body.name : null,
    quantity: request.body.quantity ? request.body.quantity : null,
    description: request.body.description ? request.body.description : null,
    url: request.body.url ? request.body.url : null
  });
  const { tags } = request.body;
  Product.create(product, tags, (error, data) => {
    if (error) {
      return response.status(500).send({
        message:
          error.message || 'Some error occurred while creating the Product.'
      });
    }
    return response.send(data);
  });
};

exports.findAll = (request, response) => {
  Product.findAll((error, data) => {
    if (error) {
      response.status(500).send({
        message:
          error.message || 'Some error occurred while retrieving Product.'
      });
    } else {
      response.send(data);
    }
  });
};

exports.findProductTag = (request, response) => {
  Product.findProductTag((error, data) => {
    if (error) {
      response.status(500).send({
        message:
          error.message || 'Some error occurred while retrieving Product.'
      });
    } else {
      response.send(data);
    }
  });
};

exports.findById = (request, response) => {
  Product.findById(request.params.productId, (error, dbResult) => {
    if (error) {
      if (error.kind === 'not_found') {
        response.status(404).send({
          message: `Not found product with id ${request.params.productId}.`
        });
      } else {
        response.status(500).send({
          message: `Error retrieving product with id ${request.params.productId}`
        });
      }
    } else {
      response.send(dbResult);
    }
  });
};
