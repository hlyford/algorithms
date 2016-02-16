// ​*circusTower *​
// A circus is designing a tower routine consisting of people standing atop one another’s shoulders. 
//For practical and aesthetic reasons, each person must be both shorter and lighter 
//than the person below him or her. Given the heights and weights of each person in the circus, 
// write a method to compute the largest possible number of people in such a tower. 

// Input: tuples of height and weight
// Output: number of people in longest tower
// Time Complexity, Space Complexity: no constraints
// Example: 
// Input (ht, wt): (65, 100) (70, 200) (56, 90) (75, 190) (60, 95) (68, 110)
// Output: The longest tower is length 5 and includes from top to bottom:
// (56, 90) (60, 95) (65, 100) (68, 110) (75, 190)


var personSorter = function(people) {

	// sort by height 
	var sorted = false;
	var heightCopy = people;
	var sortedHeight = people.sort(function(a, b){
		return a[0] > b[0];
	})
	console.log(sortedHeight);
	
	// while (!sorted) {
	// 	sorted = true;
	// 	for ( var i = 0 ; i < heightCopy.length - 1; i++) {
	// 		var current = heightCopy[i];
	// 		var next = heightCopy[i + 1];
	// 		if ( current[0] > next[0] ) {					
	// 			heightCopy[i] = next;
	// 			heightCopy[i + 1] = current;
	// 			sorted = false
	// 		}
	// 	}		
	// }
	for ( var p = 1; p < heightCopy.length - 1; p++ ) {
		if (heightCopy[p][1] < heightCopy[p - 1][1] ) {}
		
	}
	// sort by weight

	// compare the two and pick the longest

}

// TEST
personSorter([ [65, 100], [70, 200], [56, 90], [75, 190], [60, 95], [68, 110] ]);
// (56, 90) (60, 95) (65, 100) (68, 110) (75, 190)