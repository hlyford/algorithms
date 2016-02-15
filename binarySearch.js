/*
 * Given a sorted array, find the index of an element
 * using a binary search algorithm.
 *
 * Example usage:
 *
 * var index = binarySearch([1, 2, 3, 4, 5], 4);
 * console.log(index); // 3
 */

var binarySearch = function (array, target, high, low) {
	// find the middle 
	// base case: if the middle is equal to the target
		// return the index

	// recursive case: middle not equal to target
		// if it's greater than middle, look at right half
		// else look at the left half

	if (high !== undefined) {		
		var middle = Math.floor(((high - low)/2 + low));
	} else {
		var middle = Math.floor(array.length / 2);
	} 	

	if (array[middle] === target) { return middle; }

	else {
		if (middle < target) {						
			return binarySearch(array, target, array.length - 1, middle + 1);
		} else {			
			return binarySearch(array, target, 0, middle);
		}
	}

};

var index = binarySearch([1, 2, 3, 4, 5], 7);
console.log(index); // 3