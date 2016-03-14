// We have an array of objects A and an array of indexes B. 
// Reorder objects in array A with given indexes in array B. Do not change array A's length.

// var A = [C, D, E, F, G];
// var B = [3, 0, 4, 1, 2];

// sort(A, B);
// // A is now [D, F, G, C, E];

var sorter = function (a, b) {
	var asObj = {};
	for (var i = 0; i < b.length; i++) {
		asObj[b[i]] = a[i];
	}
	var results = [];
	for (var j = 0; j < a.length; j++) {
		results.push(asObj[j]);
	}
	return results;
}

// TEST
var A = ['C', 'D', 'E', 'F', 'G'];
var B = [3, 0, 4, 1, 2];
console.log(sorter(A, B)); // [D, F, G, C, E];