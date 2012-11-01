//Variables
var s1 = "Jenna";
var s2 = "Mary";
var ticklishSpots = [ "feet", "under her arms", "neck" ];
var closeEnough = true
var payingAttention = false
var tickledFor = 20


// String function to determine sister's response
var response = function (success) {
	if (success === true) 
		console.log("\"Uncle, " + s1 + ", UNCLE!\"");
	else
		console.log("\"HA HA, "+ s1 + " is a stupid-head!\" ");
};


//Number function of seconds tickled determines success or failure.
var tickleFight = function(seconds){
		for (tickledSecs = 5; tickledSecs < seconds; tickledSecs +=5) {
			console.log("I have tickled " + s2 + " for " + tickledSecs + " seconds already! When will she give up?")
		};
		console.log(s2 + " finally yells "), response(true)
};


// Boolean operation to determine the correct time to strike
if (closeEnough === false || !payingAttention === false)
	response(false),
	console.log(s1 + " ran around the front yard after " + s2 + ".");
else 
	console.log(s1 + " leapt from the shadows at " + s2 + " and began tickling.");
	if (tickledFor >= 30)
		tickleFight(tickledFor);
	else 
		console.log("But " + s1 + " didn't tickle " +s2+ " long enough, so she ran away and yelled"),
		response(false) 
	;
	

