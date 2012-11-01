//Variables
var sisters = [ "Jenna", "Mary", "Katie", "Lizzie" ];
var ticklishSpots = [ "feet", "under her arms", "neck" ];
var cry = "\"Uncle, " + sisters[0] + ", UNCLE!\"";
var taunt = "\"HA HA, "+ sisters[0] + " is a stupid-head!\"";

//Number of seconds tickled determines success or failure.
var tickleFight = function(seconds){
		for (tickledSecs = 0; tickledSecs < seconds; tickledSecs +=5) {
			console.log("I have tickled " + sisters[1] + " for " + tickledSecs + " seconds already! When will she give up?")
		};
	console.log(sisters[1] + " yells " + cry)
};

tickleFight(30);