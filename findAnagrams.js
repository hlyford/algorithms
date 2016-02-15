/**
 * Given a single input string, write a function that produces all possible anagrams
 * of a string and outputs them as an array. At first, don't worry about
 * repeated strings.  What time complexity is your solution?
 *
 * Extra credit: Deduplicate your return array without using uniq().
 */

/**
  * example usage:
  * var anagrams = allAnagrams('abc');
  * console.log(anagrams); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
  */

var allAnagrams = function(string) {
	var results = [];
	var stringArr = string.split('');	

	var helper = function(string, currentLetters) {		
		if (currentLetters.length === string.length) {
			results.push(currentLetters);			
		} else {			
			for (var p = 0; p < string.length; p++) {
				if (currentLetters.indexOf(string[p]) === -1) {					
					helper(string, currentLetters.concat(string[p]));
				}
			}
		}
	}

	for (var i = 0 ; i < stringArr.length ; i++) {		
		helper(stringArr, stringArr[i]);
	}

	return results;
};

// TEST
var anagrams = allAnagrams('abc');
console.log(anagrams); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]