const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/user.models.js');

const saltRounds = 10;

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
    password: bcrypt.hashSync(request.body.password, saltRounds),
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

exports.login = (request, response) => {
  if (!request.body) {
    return response.status(400).send({
      message: 'Content can not be empty!'
    });
  }
  const user = new User({
    email: request.body.email ? request.body.email : null,
    password: request.body.password ? request.body.password : null
  });
  User.login(user, async (error, data) => {
    if (error) {
      return response.status(500).send({
        message: error.message || 'Bad Email or Password.'
      });
    }
    const correctPassword = await bcrypt.compare(user.password, data.password);
    if (correctPassword === true) {
      jwt.sign({ id: data.id }, `${process.env.SECRET_KEY}`, (err, token) => {
        if (err) {
          return response.status(500).send({
            message: 'Erreur JWT'
          });
        }
        return response.status(200).send(token);
      });
    } else {
      return response.send({ message: 'Bad Email or Password.' });
    }
  });
};
