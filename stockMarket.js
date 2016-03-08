// Let's assume I'm playing the stock market - buy low, sell high. I'm a day trader, so I want to 
// get in and out of a stock before the day is done, and I want to time my trades so that I make the biggest gain possible.
// The market has a rule that won't let me buy and sell in a pair of ticks - I have to 
// wait for at least one tick to go buy. And obviously I can't buy in the future and sell in the past.
// So, given a list of stock price ticks for the day, can you tell me what trades I 
// should make to maximize my gain within the constraints of the market? Remember - buy low, sell high, and 
// you can't sell before you buy.
// Input Description

// You'll be given a list of stock prices as a space separated list of 2 decimal floats 
// (dollars and cents), listed in chronological order. Example:
// 19.35 19.30 18.88 18.93 18.95 19.03 19.00 18.97 18.97 18.98
// Output Description

// Your program should emit the two trades in chronological order - what you think I should buy at and sell at. Example:
// 18.88 19.03

// loop thru the array
// if the next item is lower, presume it woudl provide a better return 
	// compare current trade to 
// track bestSoFar trade front and end adn update as it gets better

var stockGuy = function(prices) {
	var results = {bestPrice: 0, left: null, right: null}, currentLeft, currentRight;
	var pricesArray = [];
	if (Array.isArray(prices)) {
		pricesArray = prices;
	} else {
		// turn into array of prices
		Array.prototype.forEach.call(arguments, function(item, index) {
			pricesArray[index] = item;
		});
	}
	
	for (var i = 0; i < pricesArray.length; i++) {
		var bestForStartingPoint = 0, currentLeft = pricesArray[i], currentRight;
		//if (pricesArray[i + 1] < pricesArray[i]) { continue; }
		// start inner loop at index past outer loop index
		for (var j = i + 2; j < pricesArray.length; j++) {
			if (pricesArray[j] - currentLeft > bestForStartingPoint) {
				currentRight = pricesArray[j], bestForStartingPoint = pricesArray[j] - currentLeft;
			}
			// compare the best price for that starting point to the best we have
			if (bestForStartingPoint > results.bestPrice) {			
				results.bestPrice = bestForStartingPoint, results.left = currentLeft, results.right = currentRight;
			}
		}		
	}
	return results.left + ' ' + results.right;
}

// TEST
console.log(stockGuy(19.35, 19.30, 18.88, 18.93, 18.95, 19.03, 19.00, 18.97, 18.97, 18.98));
var input2 = converter('9.20 8.03 10.02 8.08 8.14 8.10 8.31 8.28 8.35 8.34 8.39 8.45 8.38 8.38 8.32 8.36 8.28 8.28 8.38 8.48 8.49 8.54 8.73 8.72 8.76 8.74 8.87 8.82 8.81 8.82 8.85 8.85 8.86 8.63 8.70 8.68 8.72 8.77 8.69 8.65 8.70 8.98 8.98 8.87 8.71 9.17 9.34 9.28 8.98 9.02 9.16 9.15 9.07 9.14 9.13 9.10 9.16 9.06 9.10 9.15 9.11 8.72 8.86 8.83 8.70 8.69 8.73 8.73 8.67 8.70 8.69 8.81 8.82 8.83 8.91 8.80 8.97 8.86 8.81 8.87 8.82 8.78 8.82 8.77 8.54 8.32 8.33 8.32 8.51 8.53 8.52 8.41 8.55 8.31 8.38 8.34 8.34 8.19 8.17 8.16');
function converter (str) {
	var asArray = str.split(' ');
	asArray.forEach(function(item, index) {		
		asArray[index] = parseFloat(item);
	})
	return asArray;
}
console.log(stockGuy(input2));