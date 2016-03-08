// Write a recursive function: 
// int sum( int x, int max ) 
// { 
// /* complete the code */ 
// } 
// that calculates the sum of the numbers from x to max (inclusive). 
// For example, sum (4, 7) would compute 4 + 5 + 6 + 7 and return the value 22. 
// The function must be recursive so you are not allowed to use any conventional loop constructs

var countMachine = function(min, max) {
	if (min === max) {
		return max;
	}
	return min + countMachine(min + 1, max);
}

// TEST
// console.log(countMachine(4, 8));