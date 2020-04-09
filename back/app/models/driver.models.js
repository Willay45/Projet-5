const db = require('./database.model.js');

const Driver = function(driver) {
  this.firstname = driver.firstname;
  this.lastname = driver.lastname;
  this.address = driver.address;
  this.password = driver.password;
  this.email = driver.email;
  this.role_id = driver.role_id;
  this.numberSiret = driver.numberSiret;
  this.rib = driver. = driver.rib;
};

Driver.create = (newdriver, result) => {
  db.query('INSERT INTO driver SET ?', [newdriver], (error, dbResult) => {
    if (error) {
      return result(error, null);
    }
    return result(null, { id: dbResult.insertId, ...newdriver });
  });
};