const db = require('./database.model.js');

const User = function(user) {
  this.firstname = user.firstname;
  this.lastname = user.lastname;
  this.address = user.address;
  this.email = user.email;
};

User.findAll = result => {
  db.query('SELECT u.lastname,u.email, u.firstname, u.address, r.name FROM user as u JOIN role as r ON u.role_id = r.id', (error, dbResult) => {
    if (error) {
      return result(error, null);
    }
    return result(null, dbResult);
  });
};

module.exports = User;
