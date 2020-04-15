const Driver = require('../models/driver.models.js');

exports.create = (request, response) => {
  if (!request.body) {
    return response.status(400).send({
      message: 'Content can not be empty!'
    });
  }

  const driver = new Driver({
    lastname: request.body.lastname ? request.body.lastname : null,
    firstname: request.body.firstname ? request.body.firstname : null,
    email: request.body.email ? request.body.email : null,
    address: request.body.address ? request.body.address : null,
    password: request.body.password ? request.body.password : null,
    rib: request.body.rib ? request.body.rib : null,
    numberSIRET: request.body.numberSiret ? request.body.numberSiret : null,
    role_id: 2
  });

  Driver.create(driver, (error, data) => {
    if (error) {
      return response.status(500).send({
        message:
          error.message || 'Some error occurred while creating the driver.'
      });
    }
    return response.send(data);
  });
};
