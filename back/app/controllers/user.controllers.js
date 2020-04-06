const User = require('../models/user.models.js');

exports.findAll = (request, response) => {
  User.findAll((error, data) => {
    if (error) {
      response.status(500).send({
        message: error.message || 'Some error occurred while retrieving User.'
      });
    } else {
      response.send(data);
    }
  });
};
