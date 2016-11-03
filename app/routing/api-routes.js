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

// API POST REQUESTS====================================================================
// Records when a user submits data to server
app.post('/api/friends', function(req, res){
	//takes this match & loops through the other possible matches
	var newFriend = {
		name 	  : "",
		photo 	  : "",
		matchDiff : 1000
	};
	//posts the result of the users's survey
	var newFriendData 	= req.body;
	var newFriendName 	= newFriendData.name;
	var newFriendPhoto 	= newFriendData.photo;
	var newFriendScore 	= newFriendData.scores;

	//calculates data/difference in score to other users
	var totalScore = 0;

	//loop through the friends data array of objects to get each friends scores
	for (var i=0; i<friends.length-1; i++){
		console.log(friends[i].name);
		totalScore = 0;

		//loop through that friends score and the users score and calculate the 
		// absolute difference between the two and push that to the total difference variable set above
		for(var j=0; j<10; j++){
			// We calculate the difference between the scores and sum them into the totalScore
			totalScore += Math.abs(
				parseInt(newFriendScore[j]) - parseInt(friends[i].scores[j]));
			// If the sum of differences is less then the differences of the current "best match"
				if (totalScore <= newFriend.friendDiff){

					// Reset the newFriend to be the new friend. 
					newFriend.name 		= friends[i].name;
					newFriend.photo 	= friends[i].photo;
					newFriend.matchDiff = totalScore;
				}
			}
		}

		friends.push(newFriend);
		res.json(newFriend);
	});
};


