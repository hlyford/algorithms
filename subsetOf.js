// see if one collection is subset of another

var checkSubset = function(a, b) {
	var result = true;

	for (var i = 0; i < b.length; i++) {
		// see if the given item in b is in a
		var indexOfA = a.indexOf(b[i]);
		if (indexOfA === -1) {
			return false;    
		} else {
			// remove the item from array a
			a.splice(indexOfA, 1);
		}		
	}
	return result;
}


// TEST
var a = [2, 5, 7, 9, 10, 10];
var b = [2, 5, 10, 10, 10];
var c = [5];

// console.log(checkSubset(a, b));
// console.log(checkSubset(b, c));