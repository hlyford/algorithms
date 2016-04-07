// In order to win the prize for most cookies sold, my friend Alice and I are going to 
// merge our Girl Scout Cookies orders and enter as one unit.
// Each order is represented by an "order id" (an integer).

// We have our lists of orders sorted numerically already, in arrays. 
// Write a function to merge our arrays of orders into one sorted array.

// For example:


var mergeArrays = function (arr1, arr2) {
	var pointer1 = 0, pointer2 = 0;
	var desiredLength = arr1.length + arr2.length, resultArray = [];

	while (resultArray.length < desiredLength) {
		// if current value on for arr1 is smaller, add that
		if (arr1[pointer1] <= arr2[pointer2]) {
			resultArray.push(arr1[pointer1]);
			pointer1++;
		} else {
			resultArray.push(arr2[pointer2]);
			pointer2++;
		}
	}
	return resultArray;
}



//  TEST
var myArray     = [3, 4, 6, 10, 11, 15];
var alicesArray = [1, 5, 8, 12, 14, 19];

console.log(mergeArrays(myArray, alicesArray));
// logs [1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19]