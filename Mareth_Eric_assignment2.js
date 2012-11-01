//Eric Mareth
//10-30-12
//Project 2
//A further script exploration of my story

//Variables
var s1 = "Jenna";
var s2 = "Mary";
var ticklishSpots = [ "feet", "under arms", "neck" ];
var tickledSecs = 5
var closeEnough = true;				//	Change these responses
var payingAttention = false;		//	for a different story.
var tickledFor = 30;				//	<----- DON'T enter a number above 55, I warn you.


// To start off the story...
console.log(s1+ " waited quietly in the shade of the tree to attack her victim.") 

// Array exploring possible body targets
var tickleTarget = function() {
		for (spotNumber = 0, whichSpot = ticklishSpots.length; spotNumber < whichSpot; spotNumber++){
			console.log(s1 + " wondered if she should attack " +s2+ "'s " + ticklishSpots[spotNumber] + "?")
		}; 
	ticklishSpots.pop();
	ticklishSpots.unshift("ribs");
	console.log("\"No, I will definitely attack her " + ticklishSpots[0] + "!\"");
};
tickleTarget();


// String function to determine sister's response
var response = function (success) {
	if (success === true) 
		console.log("\"Uncle, " + s1 + ", UNCLE!\"");
	else
		console.log("\"HA HA, "+ s1 + " is a stupid-head!\" ");
};


// Number function to track the number of seconds Mary has been tickled.
var tickleFight = function(seconds){
		while (tickledSecs < seconds) {
			console.log("I have tickled " + s2 + " for " + tickledSecs + " seconds already! When will she give up?");
			tickledSecs += 5;
		};
		console.log(s2 + " finally yells "), response(true)
};


// Additional function to determine if Jenna tickles long enough.
var tickleLength = function(){
	if (tickledFor >= 55)
		console.log("AAWWWWW! You tickled " +s2+ " waaaay too long, and now she's dead. :(");
	else if (tickledFor >= 30)
		tickleFight(tickledFor);
	else
		console.log("But " + s1 + " didn't tickle " +s2+ " long enough, so she ran away and yelled"),
		response(false);
}; 


// Boolean operation to determine the correct time to strike
if (closeEnough === false || !payingAttention === false)
	console.log("But " + s1 + " jumped out too early, so " + s2 + " ran away and yelled"),
	response(false);
else 
	console.log(s1 + " leapt from the shadows at " + s2 + " and began tickling."),
	tickleLength();

