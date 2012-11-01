//Eric Mareth
//10-30-12
//Project 2
//A further script exploration of my story

//Variables
var s1 = "Jenna";
var s2 = "Mary";
var ticklishSpots = [ "feet", "under arms", "neck" ];
var tickledSecs = 5
var closeEnough = false;			//	Change these
var payingAttention = false;		//	responses for a
var tickledFor = 30;				//	different story.


// Array exploring possible body targets
var getTickleTarget = function() {
		for (spotNumber = 0, whichSpot = ticklishSpots.length; spotNumber < whichSpot; spotNumber++){
			console.log(s1 + " wonders if she should tickle " +s2+ "'s " + ticklishSpots[spotNumber] + "?")
		}; 
	ticklishSpots.pop();
	ticklishSpots.unshift("ribs");
	console.log("No, I will definitely tickle her " + ticklishSpots[0] + "!");
};
getTickleTarget();


// String function to determine sister's response
var response = function (success) {
	if (success === true) 
		console.log("\"Uncle, " + s1 + ", UNCLE!\"");
	else
		console.log("\"HA HA, "+ s1 + " is a stupid-head!\" ");
};


// Number function of seconds tickled determines success or failure.
var tickleFight = function(seconds){
		while (tickledSecs < seconds) {
			console.log("I have tickled " + s2 + " for " + tickledSecs + " seconds already! When will she give up?");
			tickledSecs += 5;
		};
		console.log(s2 + " finally yells "), response(true)
};


// Boolean operation to determine the correct time to strike
if (closeEnough === false || !payingAttention === false)
	response(false),
	console.log(s1 + " jumped out too early, so she had  to run around the front yard after " + s2 + ".");
else 
	console.log(s1 + " leapt from the shadows at " + s2 + " and began tickling.");
	if (tickledFor >= 30)
		tickleFight(tickledFor);
	else
		console.log("But " + s1 + " didn't tickle " +s2+ " long enough, so she ran away and yelled"),
		response(false); 

