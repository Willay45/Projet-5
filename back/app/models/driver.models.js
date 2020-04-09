const db = require('./database.model.js');

const Driver = function(driver) {
  console.log(driver);

  this.firstname = driver.firstname;
  this.lastname = driver.lastname;
  this.address = driver.address;
  this.password = driver.password;
  this.email = driver.email;
  this.role_id = driver.role_id;
  this.numberSIRET = driver.numberSIRET;
  this.rib = driver.rib;
};

Driver.create = (newDriver, result) => {
  db.query('INSERT INTO user SET ?', [newDriver], (error, dbResult) => {
    if (error) {
      return result(error, null);
    }
    return result(null, { id: dbResult.insertId, ...newDriver });
  });
};

module.exports = Driver;