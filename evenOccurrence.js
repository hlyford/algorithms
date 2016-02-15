/*
 * Find the first item that occurs an even number of times in an array.
 * Remember to handle multiple even-occurrence items and return the first one. 
 * Return null if there are no even-occurrence items.
*/

/*
 * example usage:
 * var onlyEven = evenOccurrence([1, 7, 2, 4, 5, 6, 8, 9, 6, 4]);
 * console.log(onlyEven); //  4
*/

var evenOccurrence = function(arr) {
  var arrCopy = arr;

  for (var i = 0; i < arr.length; i++) {
  	var total = 0; 
  	for (var p = 0; p < arrCopy.length; p++) {
  		if (arr[i] === arrCopy[p]) {
  			total++;
  		}
  	}
  	if (total % 2 === 0) {  		
  		return arr[i];
  	} 
  }  	 
  return null
};


var onlyEven = evenOccurrence([1, 7, 2, 4, 5, 6, 8, 9, 6, 4, 4, 4]);
 console.log(onlyEven); //  4
 console.log(evenOccurrence([1]));