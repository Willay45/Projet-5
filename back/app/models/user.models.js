const db = require('./database.model.js');

const User = function(user) {
  this.firstname = user.firstname;
  this.lastname = user.lastname;
  this.address = user.address;
  this.password = user.password;
  this.email = user.email;
  this.role_id = user.role_id;
};

User.findAll = result => {
  db.query(
    'SELECT u.lastname,u.email, u.firstname, u.address, u.id, r.name FROM user as u JOIN role as r ON u.role_id = r.id',
    (error, dbResult) => {
      if (error) {
        return result(error, null);
      }
      return result(null, dbResult);
    }
  );
};

User.create = (newUser, result) => {
  db.query('INSERT INTO user SET ?', [newUser], (error, dbResult) => {
    if (error) {
      return result(error, null);
    }
    return result(null, { id: dbResult.insertId, ...newUser });
  });
};

User.login = (user, result) => {
  db.query(
    `SELECT * FROM user WHERE email = ?`,
    [user.email],
    (error, dbResult) => {
      if (error) {
        return result(error, null);
      }
      return result(null, dbResult[0]);
    }
  );
};

module.exports = User;
