const db = require('./database.model.js');

const Tag = function(tag) {
  this.name = tag.name;
};

Tag.findAll = result => {
  db.query('SELECT * FROM tag', (error, dbResult) => {
    if (error) {
      return result(error, null);
    }
    return result(null, dbResult);
  });
};

module.exports = Tag;
