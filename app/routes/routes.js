'use strict'

var upload = require('multer')();
var path = process.cwd();

function createResponseObject(files) {
  if (!files) {
    return { "error": "cannot read file" };
  }

  return files.map(function(item) {
    return {
      originalName: item.originalname,
      size: item.size
    };
  });
}

module.exports = function(app) {

  app.post('/api', upload.any(), function(req, res) {
    res.json(createResponseObject(req.files));
  });
  
  app.get('/', function(req, res) {
    res.sendFile(path + '/public/index.html');
  });
};