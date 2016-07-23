'use strict'

var upload = require('multer')();
var path = process.cwd();

module.exports = function(app) {

  app.post('/api', upload.any(), function(req, res) {
    res.json( {
        fieldName: req.files[0].fieldname,
        size: req.files[0].size
      });
    }
  );
  
  app.get('/', function(req, res) {
    res.sendFile(path + '/public/index.html');
  });
};