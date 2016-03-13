/*
 * Given a sorted array, find the index of an element
 * using a binary search algorithm.
 *
 * Example usage:
 *
 * var index = binarySearch([1, 2, 3, 4, 5, 8, 9], );  // 1 -> 1
 // length = 7, firstMid = 3
 * console.log(index); // 3
 */

var binarySearch = function (array, target) {
	var midIndex = Math.floor((array.length) / 2);
	var maxIndex = array.length - 1;
	var minIndex = 0;

	while (midIndex !== maxIndex) {			

		if (target === array[midIndex]) {
			return midIndex;
		}
		// if it's less than, go left
		if (target < array[midIndex]) {
			maxIndex = midIndex;
			midIndex = Math.floor(midIndex/2);
		// if it's greater than mid, go right
		} else {			
			minIndex = midIndex;
			midIndex = Math.floor(((((array.length) - midIndex)/2)) + midIndex);						
			
			//if (midIndex === 7) { return}
		}
	}
	return null;

};

// TEST
console.log(binarySearch([1, 4, 5, 8, 10, 15, 18, 24], 22)); // 6
// console.log(binarySearch([1, 2, 3, 4, 5], 4)); // 3
// console.log(binarySearch([4], 4));