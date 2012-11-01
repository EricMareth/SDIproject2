//Variables
var sisters = [ "Jenna", "Mary", "Katie", "Lizzie" ];
var ticklishSpots = [ "feet", "under her arms", "neck" ];
var cry = "\"Uncle, " + sisters[0] + ", UNCLE!\"";
var taunt = "\"HA HA, "+ sisters[0] + " is a stupid-head!\" ";
var closeEnough = false
var payingAttention = false


// Boolean operation to determine the correct time to strike
if (closeEnough === false || !payingAttention === false)
	console.log(taunt + sisters[0] + " chased after " + sisters[1] + ".");
else 
	console.log(sisters[0] + " leaps from the shadows at " + sisters[1] + ".");
	

//Number function of seconds tickled determines success or failure.
var tickleFight = function(seconds){
		for (tickledSecs = 0; tickledSecs < seconds; tickledSecs +=5) {
			console.log("I have tickled " + sisters[1] + " for " + tickledSecs + " seconds already! When will she give up?")
		};
	console.log(sisters[1] + " yells " + cry)
};

tickleFight(30);