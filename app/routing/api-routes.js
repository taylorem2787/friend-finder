// Importing data file
var friends = require('../data/friends.js');
var path = require('path');
//var friends = require('../data/friends.js');


// API GET REQUESTS=====================================================================
module.exports = function(app){
//loads data from friends.js
	app.get('/api/friends', function(req, res){
		res.json(friends);
	});
};	
// API POST REQUESTS====================================================================
// Records when a user submits data to server
   // app.post('/api/friends', function(req, res){
	//	res.json(newFriend);
	
// 	takes this match & loops through the other possible matches
// 	var newFriend = {
// 		name 	  : "",
//photo 	  : "",
// 		matchDiff : 1000
// 	};
// 	//posts the result of the users's survey
// 	var newFriendData 	= req.body;
// 	var newFriendName 	= newFriendData.name;
// 	var newFriendPhoto 	= newFriendData.photo;
// 	var newFriendScore 	= newFriendData.scores;
	


// 	//calculates data/difference in score to other users
// 	var totalScore = 0;

// 	//loop through the friends data array of objects to get each friends scores
// 	for (var i=0; i<friends.length-1; i++){
// 		console.log(friends[i].name);
// 		totalScore = 0;


// 				}
// 			}
// 		}

// 		friends.push(newFriendData);

// }


