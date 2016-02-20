// check if number is prime

var primeTest = function(num) {
	for (var i = 1; i <= num/2; i++) {
		for (var j = 1; j <= num/2; j++) {			
			if (i * j === num) {
				return false;
			}
		}
	}
	return true;
};

// TEST
console.log(primeTest(10974));