const Basket = require('../models/basket.models.js');

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
