// Diving board 

/* you are building a diving board with planks of wood.
you have two types of planks LONGER and SHORTER
you must use exactly k planks of wood
 write a method to generate all possible *lengths* of divings

 e.g. k = 2
 // [ {longer: 2, shorter 0}, {longer: 1, shorter: 1}, {longer: 0, shorter: 2} ]
*/

var longer = 'longer', shorter = 'shorter';

var divingBoard = function(k) {
	results = [];

	var makeBoard = function(currentBoardArr, numPlanks) {
		if (numPlanks === k) { 
			var adding = true;			

			for (var i = 0; i < results.length; i++) {				
				if (results[i].longer === currentBoardArr.longer && results[i].shorter === currentBoardArr.shorter) {					
					adding = false;
				}
			}		

			if (adding) { results.push(currentBoardArr); }
		} else {
			var currentLonger = currentBoardArr[longer], currentShorter = currentBoardArr[shorter];
			makeBoard({longer: currentLonger + 1, shorter: currentShorter}, numPlanks + 1);
			makeBoard({ longer: currentLonger, shorter: currentShorter + 1}, numPlanks + 1);
		}
	}

	makeBoard({longer: 1, shorter: 0}, 1);
	makeBoard({longer: 0, shorter: 1}, 1);

	return results;

}

console.log(divingBoard(3)); // 3