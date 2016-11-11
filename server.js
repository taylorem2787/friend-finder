// DEPENDENCIES===========================================================
// NPM Packages needed
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

// =======================================================================
// Set up express app
var app  = express();
var PORT = process.env.PORT || 3000;

// =======================================================================
// Handling public files
app.configure(function(){
  app.use('/css', express.static(__dirname + '/css'));
  app.use(express.static(__dirname + '/public'));
});
// app.use(express.static('public'));
// app.use('/css', express.static(__dirname + '/css'));
// app.use('/css', express.static(__dirname + '/public/css'));

// =======================================================================
// Set up data parsing for express app 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

app.use(express.static('app'));
// app.use(express.static(path.join(__dirname, '/public'));
// ROUTES =================================================================
// route files needed to map out the site
require('./app/routing/api-routes.js')(app); 
require('./app/routing/html-routes.js')(app);

// LISTENER ===============================================================
// LISTENER - Starts the app
app.listen(PORT, function(){
    console.log('App listening on PORT ' + PORT);
});
