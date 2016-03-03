// You are the game master of the game "Guess my hat color".
// The game goes as following:
// You put a group of n people in one row, each facing the same direction
// You assign a collored hat to each person of the group
// Now you let each person guess the color of their own hat, starting with the last person in the row.
// There are only 2 colors of hats and each person can only see the color of hats in front of them. 
// The group wins from the gamemaster if they can win by making only 1 mistake.
// The challenge today is to write the logic to make the guess.
// The person guessing can only see the persons in front of them (and their hats) and can hear 
// the guesses from the persons behind them. They can NEVER look behind them or look at their own hat.

var hatColor = function(hats) {
	var lastCanSee = hats.slice(1, hats.length), results = [];
	// get the count of hats
	var makeCountObject = function(arr) {
		var obj = {'Black': 0, 'White': 0};
		arr.forEach(function(item, index) {
			if (item === 'Black') {obj.Black++; }
			else {obj.White++; }			
		});
		return obj;
	}

	var countsFromLast = makeCountObject(lastCanSee);
	
	// last person says color that has EVEN amount in sight
	if (countsFromLast.Black % 2 === 0) {
		results[0] = 'Black';
	} else {
		results[0] = 'White';
	}		
	// loop thru each and slice down to what they can see		
	for (var i = 1; i < hats.length; i++) {		
		var currentCanSee = hats.slice(i + 1, hats.length);
		var currentCanSeeCount = makeCountObject(currentCanSee);
		// expect (currentCanSee + his hat) -> hats % 2 === 0		
		if (countsFromLast.Black % 2 !== currentCanSeeCount.Black % 2) {
			results[i] = 'Black';
		} else {
			results[i] = 'White';
		}
		countsFromLast = currentCanSeeCount;
	}
	return results;
};



console.log(hatColor(['Black', 'White', 'Black', 'Black', 'White', 'White', 'Black', 'White', 'White', 'White'])); 