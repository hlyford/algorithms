

var fb = function(num) {
	var a = 0, b = 1, counter = 2, total = 0;

	while (counter <= num) {				
		total = a + b;
		if (counter % 2 === 0) {
			a = total;
		} else {
			b = total;
		}
		counter++;
	}
	return total;
}

// TEST
console.log(fb(74));