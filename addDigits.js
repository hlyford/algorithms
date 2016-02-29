// Given a non-negative integer num, repeatedly add all its digits until the result has only one digit.

// For example:

// Given num = 38, the process is like: 3 + 8 = 11, 1 + 1 = 2. Since 2 has only one digit, return it.

// Follow up:
// Could you do it without any loop/recursion in O(1) runtime?

var converter = function(num) {
	var result = 0;

	if ( num.toString().length < 2 ) {
		return num;

	} else {
		var asArray = num.toString().split('');		
		var newNum = 0;
		for (var i = 0; i < asArray.length; i++) {
			newNum += parseInt(asArray[i]);
		}
		return converter(newNum);
	}
}

// TEST
//console.log(converter(355));