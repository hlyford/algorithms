// 13, 27, 35, 40, 49, 55, 59
// 17, 35, 39, 40, 55, 58, 60

var a = [13, 27, 35, 40, 49, 55, 59];
var b = [17, 35, 39, 40, 55, 58, 60];

var inCommon = function(arr1, arr2) {
	// put everything in arr2 into a hash table
	// loop through arr1
		// check if in arr2
	var obj2 = {}, results = [];
	arr2.forEach(function(item, index) {
		obj2[item] = item;
	});
	arr1.forEach(function(item, index) {
		item in obj2 ? results.push(item) : null;
	})	
	return results;
}
// TEST
// console.log(inCommon(a, b));


// with O(1) space complexity
var inCommon2 = function(a, b) {
	// only start searching at last checked index
	var lastIndex = 0, results = [];

	a.forEach(function(item, index) {
		for (var i = lastIndex; i < b.length; i++) {			
			if (b[i] === item) {
				results.push(item);
				lastIndex = i;
			}
		}
	})	
	return results;
}
console.log(inCommon2(a, b));