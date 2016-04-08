// telephone ABCs


var phoneDigitsToLetters = {
  0: '0',
  1: '1',
  2: 'ABC',
  3: 'DEF',
  4: 'GHI',
  5: 'JKL',
  6: 'MNO',
  7: 'PQRS',
  8: 'TUV',
  9: 'WXYZ'
};
// helper function
var englishChecker = function(str) {
	if (str === "BAD") {
		return str;
	}
};

var telephoneWordMaker = function (nums) {
	var fullStrings = [], passingResults = [];

	function inner (str) {
		if (str.length === nums.length) {			
			return str;
		} else {			
			// split the possible letters into array and loop through array calling inner function for each
			var possibleLettersArr = phoneDigitsToLetters[nums[str.length]].split('');			
			possibleLettersArr.forEach(function (letter, index) {				
				fullStrings.push(inner(str + letter)); 
			});
		}
	}
	inner('');
	fullStrings.forEach(function(testString, index) {
		if (englishChecker(testString)) {
			passingResults.push(testString);
		}
	})
	console.log(fullStrings);
	return passingResults;
}


// TEST
console.log(telephoneWordMaker('223')); // ['BAD']
