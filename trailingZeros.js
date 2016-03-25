


var zeroCounter = function(num) {
	var factorial = 1;
	for (var i = 1; i < num + 1; i++) {		
		factorial *= i;
	}
	var asString = factorial.toString(), total = 0;	
	for (var j = asString.length - 1;j > -1; j--) {	
		if (asString[j] === '0') {			
			total++;
		} else {			
			return total;
		}
	}
}

// TEST
console.log(zeroCounter(5)); // 1
