'use strict'

var express = require('express');
var favicon = require('serve-favicon');

var routes = require('./app/routes/routes.js');

var app = express();
var path = process.cwd();

// heroku sets NODE_ENV to 'production', in that case 'dotenv' is not loaded
if (!process.env.NODE_ENV || process.env.NODE_ENV !== 'production') {
  require('dotenv').load();
}

app.use(express.static(__dirname + '/public'));
app.use(favicon(path + '/public/favicon.ico'));

routes(app);

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log('Node.js listening on port ' + port);
});