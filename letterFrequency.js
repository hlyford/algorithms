
var countLetters = function(str) {
	// convert to lowercase; declare variables
	var str = str.toLowerCase(), letterCount = {}, results = [];
	// iterate thru and add to object
	for (var i = 0; i < str.length; i++) {
		if (str[i] in letterCount) {
			letterCount[str[i]]++;
		} else {
			letterCount[str[i]] = 1;
		}
	}
	// add each item in object to results array as tuples
	for (var key in letterCount) {
		results.push([key, letterCount[key]]);
	}
	// sort by the count and then the letter
	results.sort(function(a, b) {
		if (a[1] === b[1]) {
			return a[0] > b[0];
		}
		return a[1] < b[1];
	});
	return results;
}

// TEST

//console.log(countLetters('mississippi'));
// *  [
//  *    ['i', 4],
//  *    ['s', 4],
//  *    ['p', 2],
//  *    ['m', 1]
//  *  ]

//console.log(countLetters('mmmaaaiiibbb'); 
 ); // *  [
 // *    ['a', 3],
 // *    ['b', 3],
 // *    ['i', 3],
 // *    ['m', 3]
 // *  ]
