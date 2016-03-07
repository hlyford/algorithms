// A descriptive number tells us how many digits we have depending on its index.
// For a number with n digits in it, the most significant digit stands for the '0's and the least significant stands for (n - 1) digit.
// As example the descriptive number of 101 is 120 meaning:
// It contains 1 at index 0, indicating that there is one '0' in 101;
// It contains 2 at index 1, indicating that there are two '1' in 101;
// It contains 0 at index 2, indicating that there are no '2's in 101;
// Today we are looking for numbers that describe themself:
// In mathematics, a self-descriptive number is an integer m that in a given base b is b digits long in which each digit d at position n (the most significant digit being at position 0 and the least significant at position b - 1) counts how many instances of digit n are in m.
// Source
// As example we are looking for a 5 digit number that describes itself. This would be 21200:
// It contains 2 at index 0, indicating that there are two '0's in 21200;
// It contains 1 at index 1, indicating that there is one '1' in 21200;
// It contains 2 at index 2, indicating that there are two '2's in 21200;
// It contains 0 at index 3, indicating that there are no '3's in 21200;
// It contains 0 at index 4, indicating that there are no '4's in 21200;
// Formal Inputs & Outputs

// Input description

// We will search for self descriptive numbers in a range. As input you will be given the number of digits for that range.
// As example 3 will give us a range between 100 and 999
// Output description

// Print out all the self descriptive numbers for that range like this:
// 1210
// 2020
// Or when none is found (this is very much possible), you can write something like this:
// No self-descriptive number found
// In and outs

// Sample 1
// In
// 3
// Out
// No self-descriptive number found
// Sample 2
// In
// 4
// Out
// 1210
// 2020

var descriptiveNumbers = function(range) {
	var results = [];
	for (var i = 0; i < 100000; i++) {				
		var asString = i.toString();
		var stringLength = asString.length;		
		// if it's too long, break
		if (stringLength > range) { break; }
		// if it's in the rnage, do the logic
		if (stringLength >= range) {

			var trackingObject = {}, appearanceCount = {};	
			// initialize zeros for all the numbers in the range	
			for (var h = 0; h < range; h++) {
				appearanceCount[h] = 0;
			}	
			for (var j = 0; j < asString.length; j++) {
				// make object showing declared counts
				trackingObject[j] = parseInt(asString[j]);
				// AND make object showing number of appearances of letter
				if (asString[j] in appearanceCount) {
					appearanceCount[asString[j]]++;
				}				
			}						

			// compare each item in objects; false --> not descriptive
			var addToResults = true;
			for (var key in trackingObject) {
				if (trackingObject[key] !== appearanceCount[key]) {
					addToResults = false;
				}
			}
			if (addToResults) {
				results.push(parseInt(asString));
			}

		}
	}
	return results
};

module.exports = {
	descriptiveNumbers: descriptiveNumbers
}

// TEST
//console.log(descriptiveNumbers(5));