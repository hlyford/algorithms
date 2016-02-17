var checkPalindrome = function(string) {
	var asArray;

	if (typeof string === 'string') {
		asArray = string.split('');
	} else if (typeof string === 'number') {		
		asArray = string.toString().split('');
	}
	
	for (var i = 0, j = asArray.length - 1; i < asArray.length; i++, j--) {		
		if (asArray[i] !== asArray[j]) {
			return false;
		}
	}
	return true;
}

// TEST
console.log(checkPalindrome('kayak')); // true
console.log(checkPalindrome('sioghrgh')); // false


console.log(checkPalindrome(66766));