// factorialZeros 
// Write an algorithm which computes the number of trailing zeros in n factorial. 
// Input: integer
// Output: integer
// Time complexity, space complexity: no constraints
// Input: 22
// Output: 4 (22! is 1,124,000,727,777,607,680,000)

var factorialZeros = function(number) {

	// find the factorial of the number
	var count = 1;
	var factorial = 1;
	while (count <= number) {
		factorial = factorial * count;
		count++;
	}
	console.log(factorial);

	// loop from the end of the factorial and count zeros until it's not a zero
	var numZeros = 0;
	var toString = factorial.toString();
	
	for (var i = toString.length - 1; i >= 0; i-- ) {
		if (toString[i] !== '0') {
			console.log('zerps', numZeros);
			return numZeros;
		}
		numZeros++;
	}	
}

factorialZeros(15)