// In order to win the prize for most cookies sold, my friend Alice and I are
// going to merge our Girl Scout Cookies orders and enter as one unit.
// Each order is represented by an "order id" (an integer).

// We have our lists of orders sorted numerically already, in arrays.
//  Write a function to merge our arrays of orders into one sorted array.

// For example:

 var myArray     = [3, 4, 6, 10, 11, 15];
var alicesArray = [1, 5, 8, 12, 14, 19];


function mergeArrays (arr1, arr2) {
	// loop from the beginning of the arrays until there are no more in either
		// see which has smaller value in first position
		// add that to the answer array
		// remove that item from that array
	var answer = [];

	while (arr1.length > 0 || arr2.length > 0) {
		if (arr1[0] <= arr2[0]) {
			answer.push(arr1[0]);
			arr1.splice(0, 1);
		} else {
			answer.push(arr2[0]);
			arr2.splice(0, 1);
		}
	}
	return answer;
}

console.log(mergeArrays(myArray, alicesArray));
// logs [1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19]

