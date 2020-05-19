const Basket = require('../models/basket.models.js');

exports.create = (request, response) => {
  if (!request.body) {
    return response.status(400).send({
      message: 'Content can not be empty!'
    });
  }

  const { baskets } = request.body;

  Basket.create(baskets, (error, data) => {
    if (error) {
      return response.status(500).send({
        message:
          error.message || 'Some error occurred while add product into basket.'
      });
    }
    return response.send(data);
  });
};

exports.findById = (request, response) => {
  Basket.findById(request.params.userId, (error, dbResult) => {
    if (error) {
      if (error.kind === 'not_found') {
        response.status(404).send({
          message: `Not found user with id ${request.params.userId}.`
        });
      } else {
        response.status(500).send({
          message: `Error retrieving user with id ${request.params.userId}`
        });
      }
    } else {
      response.send(dbResult);
    }
  });
};
