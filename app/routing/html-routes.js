// DEPENDENCIES===========================================================
// Path package to get path to file
var path = require('path');

// ROUTES =================================================================
// Sends html file via express app
module.exports = function(app) {
	// HTML GET requests for when user visits home/survey html page
	app.get('/home', function(req, res){
		//responds with path  [directory name, path to survey.html]
		res.sendFile(path.join(__dirname + '/../public/home.html'));
	});

	app.get('/survey', function(req, res){
		res.sendFile(path.join(__dirname + '/../public/survey.html'));
	});

	app.get('/survey', function(req, res){
		res.sendFile(path.join(__dirname + '/../public/css'));
	});



	//Default - No matches
	app.use(function(req, res){
		res.sendFile(path.join(__dirname + '/../public/home.html'));
	})

}



