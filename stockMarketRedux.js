

var stocker = function(stocks) {
	var bestProf, bestStart, bestEnd;
	bestStart = stocks[0];
	
	for (var i = 1; i < stocks.length; i++) {
		// next one is smaller
		if (stocks[i] < bestStart) {						
			if (stocks[i + 1] !== undefined) {								
				// switch them
				bestStart = stocks[i];
			} else {
				if (stocks[i] - bestStart > bestProf || bestProf === undefined) {				
					bestEnd = stocks[i];
					bestProf = bestEnd - bestStart;
				}
			}
		} else {
			// next one is bigger
			if (stocks[i] - bestStart> bestProf || bestProf === undefined) {				
				// switch end
				bestEnd = stocks[i];
				bestProf = bestEnd - bestStart;
			}
		}
	}

	return [bestProf, [bestStart, bestEnd]];
}



// TEST
var test1 = [3, 2, 8, 5, 9]; // [7, [2, 9]]
var test2 = [3, 1, 0] // [-1, [1, 0]]
var test3 = [3, 8]
console.log(stocker(test2));