const db = require('./database.model.js');

const Image = function(image) {
  this.name = image.name;
  this.url = image.url;
};

Image.create = (newImage, result) => {
  db.query('INSERT INTO image SET ?', [newImage], (error, dbResult) => {
    if (error) {
      return result(error, null);
    }
    return result(null, { id: dbResult.insertId, ...newImage });
  });
};

Image.findAll = result => {
  db.query('SELECT * FROM image', (error, dbResult) => {
    if (error) {
      return result(error, null);
    }

    return result(null, dbResult);
  });
};

module.exports = Image;
