// Write a function to swap a number in place (no other variables)
// - - 3 - - - 7
var swapper = function(a, b) {
	var a = a, b = b;
	a = a - b; // a = 4, b = 3
	b = b + a; // a = 4, b = 7
	a = b - a;

	return 'a = ' + a + ' and b = ' + b; 
}

console.log(swapper(7, 3));