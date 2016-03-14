// write a function that adds two numbers without using arithmetic

var adder = function(a, b) {
	var asArr = [];
	for (var i = 0; i < a; i++) {
		asArr.push(true);
	}
	for (var j = 0; j < b; j++) {
		asArr.push(true);
	}
	return asArr.length;
}

// TEST
console.log(adder(5 , 7));