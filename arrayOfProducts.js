// You have an array of integers, and for each index you want to find the product of every integer except the integer at that index.
// Write a function getProductsOfAllIntsExceptAtIndex() that takes an array of integers and returns an array of the products.

// For example, given:

//   [1, 7, 3, 4]

// your function would return:

//   [84, 12, 28, 21]

// by calculating:

//   [7*3*4, 1*3*4, 1*7*4, 1*7*3]

// NAIVE
// T = 0(n^2)  S = O(n)
var prodMaker = function(arr) {
	var results = [];
	arr.forEach(function(item, index) {
		var currentProd = 1;
		for (var j = 0; j < arr.length; j++) {
			if (index !== j) {
				currentProd *= arr[j];
			}
		}
		results.push(currentProd);
	})
	return results;
}

// SOPHISTICATED
var prodMaker2 = function(arr) {
	var leftProds = [], rightProds = [];
	var leftSoFar = 0, rightSoFar = 0;

	for (var i = 0, j = arr.length - 1; i < arr.length; i++, j--) {
		leftProds[i] = leftSoFar;
		rightProds[j] = rightSoFar;
		if (i === 0) {
			leftSoFar = 1, rightSoFar = 1;
		}
		rightSoFar *= arr[j];
		leftSoFar *= arr[i];
		
	}	
	console.log(leftProds, rightProds); // 
	var totalProds = [];
	for (var p = 0; p < leftProds.length; p++) {		
		totalProds[p] = leftProds[p] + rightProds[p];
	}
	return totalProds;
}



// TEST
var test = [2, 4, 3]; // [12, 6, 8]
var test2 = [1, 7, 3, 4] //   [84, 12, 28, 21]
console.log(prodMaker2(test));


