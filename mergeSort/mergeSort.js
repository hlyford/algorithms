var merger = function(left, right) {
	var results = [], indexLeft = indexRight = 0;
	// while the results does not have all the values, compare the lowest in left side to lowest in right side b/c you know they're sorted
	while (results.length < left.length + right.length) {		
		if (left[indexLeft] <= right[indexRight] || indexRight === right.length) {
			results.push(left[indexLeft]);
			indexLeft++;
		} else {
			results.push(right[indexRight]);
			indexRight++;
		}
	}

	return results;
}

var mergeSort = function(list) {
	// break the list into individual items
	var listOfAll = [];
	list.forEach(function(item, index) {
		listOfAll.push([item]);
	})

	// loop through and merge each into a sorted list of two
	// look at the item and next item		
		// use merger fn to merge them in order into the array	

	var mergeAll = function(currentList, count) {
		// base case: it's been sorted
		if (currentList.length === 1) {
			//console.log(currentList);
			return currentList;
		// recursive case: there are still arrays in there
		} else {			
			nextList = [];
			for (var i = 0; i < currentList.length; i += 2) {			
				// if the next space is empty, just add the odd element out	
				if (currentList[i + 1] === undefined) {					
					nextList.push(currentList[i]);
				// else use merger function to merge node with the next
				} else {
					nextList.push(merger(currentList[i], currentList[i + 1]));
				}						
			}				
			return mergeAll(nextList, count+1);		
		}		
	}	
	var result = mergeAll(listOfAll, 0);
	return result[0];
}

 


// TEST
console.log(mergeSort([6, 4, 91, 8, 2]));

// console.log(merger([1, 5, 8, 95], [3, 6, 8, 55, 108]));