// given two strings, check if one is a permutation of the other

var stringChecker = function(strBig, strSmall) {
	// see if all the letters appear the same number of times
	var asObj = {};
	// loop thru adding the letters from first string to object
	for (var i = 0; i < strBig.length; i++) {
		if (strBig[i] in asObj) {
			strBig[i]++;			
		} else {
			asObj[strBig[i]] = 1;
		}
	}
	// loop thru substracting; 
	for (var j = 0; j < strSmall.length; j++) {		
		if (!(strSmall[j] in asObj)) {			
			return false;
		} else {
			// if it's ever less than 0 at a character, it's false
			asObj[strSmall[j]]--;
			if (asObj[strSmall[j]] < 0) {
				return false;
			}
		}
	}
	return true; 
}

// TEST
console.log(stringChecker('h123', '321h')); // true