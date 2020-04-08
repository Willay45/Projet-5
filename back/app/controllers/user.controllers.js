const User = require('../models/user.models.js');

exports.create = (request, response) => {

  if (!request.body) {
    return response.status(400).send({
      message: 'Content can not be empty!'
    });
  }

  const user = new User({
    lastname: request.body.lastname ? request.body.lastname : null,
    firstname: request.body.firstname ? request.body.firstname : null,
    email: request.body.email ? request.body.email : null,
    address: request.body.address ? request.body.address : null,
    password: request.body.password ? request.body.password : null,
    role_id: 3
  });

  User.create(user, (error, data) => {
    if (error) {
      return response.status(500).send({
        message: error.message || 'Some error occurred while creating the user.'
      });
    }
    return response.send(data);
  });
};

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
