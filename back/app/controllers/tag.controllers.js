const Tag = require('../models/tag.models.js');

exports.findAll = (request, response) => {
  Tag.findAll((error, data) => {
    if (error) {
      response.status(500).send({
        message: error.message || 'Some error occurred while retrieving Tag.'
      });
    } else {
      response.send(data);
    }
  });
};
