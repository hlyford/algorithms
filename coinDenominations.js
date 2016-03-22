// Imagine you landed a new job as a cashier...
// Your quirky boss found out that you're a programmer and has a weird request 
// about something they've been wondering for a long time.

// Write a function that, given:

// an amount of money
// an array of coin denominations
// computes the number of ways to make amount of money with coins of the available denominations.

// Example: for amount= 4 (4¢) and denominations=[1,2,3] (1¢, 2¢ and 3¢), 
// your program would output 4—the number of ways to make 4¢ with those denominations:

// 1¢, 1¢, 1¢, 1¢
// 1¢, 1¢, 2¢
// 1¢, 3¢
// 2¢, 2¢


var changeMaker = function(amount, denoms) {
	var total = 0, combos = [], memo = {};

	var helper = function(comboSoFar, comboTotal) {
		// base case: amt is equal to the amt you want to make
		if (comboTotal === amount) {
			// check if we already have that combination in our results array
			var addIt = true;			
			combos.forEach(function(item, index) {				
				// sort and convert to string and see if the strings are equal
				if (comboSoFar.sort().join(',') === item.sort().join(',')) {
					addIt = false;
				}
			});
			// if it hasn't been added yet, add to results arraya
			if (addIt) {
				combos.push(comboSoFar);
				total++;			
				return true;
			} else {
				return false;
			}
		} else {
			// recursive case: keep building the combo with all possible next amts
			denoms.forEach(function(item, index) {
				// call helper with that new item in the dealie				
				var newArray = comboSoFar.concat(item), newTotal = comboTotal + item;
				if (newTotal <= amount) {					
					helper(newArray, newTotal);
				}
			})
		}
	}

	helper([], 0);
	return combos;
}

// TEST
console.log(changeMaker(4, [1, 2, 3])); // 4