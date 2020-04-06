const Image = require('../models/image.models');

// Create a new Image
exports.create = (request, response) => {
  if (!request.body) {
    return response.status(400).send({
      message: 'Content can not be empty!'
    });
  }

  // Create a Image
  const image = new Image({
    name: request.body.name ? request.body.name : null,
    url: request.body.name ? request.body.name : null
  });

  // Save Image in the database
  Image.create(image, (error, data) => {
    if (error) {
      return response.status(500).send({
        message:
          error.message || 'Some error occurred while creating the image.'
      });
    }
    return response.send(data);
  });
};

exports.findAll = (request, response) => {
  Image.findAll((error, data) => {
    if (error) {
      response.status(500).send({
        message: error.message || 'Some error occurred while retrieving Image.'
      });
    } else {
      response.send(data);
    }
  });
};
