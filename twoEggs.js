// two eggs
// 100 story building [ 0,0,0,0,1,1,1,1 ]
// want the fewest number of attempts

// egg 1:
	// drop from 50 story
		// breaks: go down with next egg
			// try every floor starting with the bottom
		// doesn't break: go to 75th floor
			// do the same thing

function makeBuilding (story) {
	var building = [];
	var currentStory = 0;
	while (currentStory < 100) {
		if (currentStory < story) {
			building[currentStory] = 0;
		} else {
			building[currentStory] = 1;
		}
		currentStory++;
	}
	return building;
}

function egger (storyBreaks) {
	var building = makeBuilding(storyBreaks), attempts = 0;

	function drop (bottom, top, middle) {
		attempts++;
		// base case: breaks in the middle
		if (building[middle] === 1) {
			// go to the bottom and try them all
			for (var i = bottom; i < middle + 1; i++) {
				attempts++;
				if (building[i] === 1) {
					return {story: i, attempts: attempts};
				}
			}
		} else {
		// recursive case; go again
			console.log(middle);
			if (attempts > 5) return;
			newMiddle = Math.floor(middle + (top - middle)/2);
			return drop(middle, top, newMiddle);
		}
	}

	return drop(0, 100, 50);
}


console.log(egger(14))