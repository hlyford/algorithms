// You are given coins of different denominations and a total amount of 
// money amount. Write a function to compute the fewest number of coins that you need to make up that amount.
//  If that amount of money cannot be made up by any combination of the coins, return -1.

var atmMachine = function(arr, amt) {
	var bestSoFar = -1, allResults = [];

	var helper = function(amtLeft, stepsSoFar) {
		if (amtLeft === 0) {
			if (stepsSoFar < bestSoFar && bestSoFar !== -1) {
				bestSoFar = stepsSoFar;
			} else if (bestSoFar === -1) {
				bestSoFar = stepsSoFar;
			}
			return stepsSoFar ;
		} else {
			for (var i = 0; i < arr.length; i++) {
				if (amtLeft - arr[i] >= 0) {
					if (helper(amtLeft - arr[i], stepsSoFar + 1)) {
						allResults.push(helper(amtLeft - arr[i], stepsSoFar + 1));
					}
				}
			}			
		}
	}
	helper(amt, 0);
	console.log(allResults);

	return bestSoFar;
}




// TEST
// console.log(atmMachine([1, 5, 8, 10], 24)); // 4
console.log(atmMachine([10,  5], 100)); // -1
