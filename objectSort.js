// sort array of objects based on a property value

var objectSort = function(array, target, select) {
	var sorted = arguments[3];
	if (sorted) {
		// if it's sorted, return the desired value
		var result = [];
		for (var i = 0; i < array.length; i++) {
			result.push(array[i][select]);
		}
		return result;
	} else {
		// if not, bubble sort again
		var sorted = true;
		for (var p = 0; p < array.length - 1; p++) {
			var current = array[p];
			var next = array[p + 1];
			if (current[target] > next[target]) {
				array[p] = next;
				array[p + 1] = current;
				sorted = false;
			}
		}
		// recurse passing in the array and whether it's sorted
		return objectSort(array, target, select, sorted);
	}
}

var nativeObjectSort = function(array, target, select) {
	var helper = function(a, b) {		
		return a[target] > b[target];
	}
	return array.sort(helper);
}




// TEST
var people = [{name: 'frank', age: 56}, {name: 'angela', age: 12}, {name: 'kyle', age: 24}];
// console.log(objectSort(people, 'age', 'name')); // ['angela' , 'kyle' , 'frank']
// console.log(nativeObjectSort(people, 'age', 'name')); 