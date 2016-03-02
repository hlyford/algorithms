// When you were a little kid, was indiscriminately flicking light switches super fun? I know it was for me. Let's tap into that and try to recall that feeling with today's challenge.
// Imagine a row of N light switches, each attached to a light bulb. All the bulbs are off to start with. You are going to release your inner child so they can run back and forth along this row of light switches, flipping bunches of switches from on to off or vice versa. The challenge will be to figure out the state of the lights after this fun happens.
// Input description

// The input will have two parts. First, the number of switches/bulbs (N) is specified. On the remaining lines, there will be pairs of integers indicating ranges of switches that your inner child toggles as they run back and forth. These ranges are inclusive (both their end points, along with everything between them is included), and the positions of switches are zero-indexed (so the possible positions range from 0 to N-1).
// Example input:
// 10
// 3 6
// 0 4
// 7 3
// 9 9
// There is a more thorough explanation of what happens below.
// Output description

// The output is a single number: the number of switches that are on after all the running around.
// Example output:
// 7
// XXXXX..X.X


function countLights (numberSwitches) {	
	var turns = Array.prototype.slice.call(arguments, 1, arguments.length);
	var onOrOff = [], result = 0;
	// function to switch light off/on
	function toggleSwitch(index) {
		return onOrOff[index] === 0 ? 1 : 0;
	}
	// make all the lights as off at index of the switch number
	for (var i = 0; i < numberSwitches; i++) {
		onOrOff[i] = 0;
	}

	for (var j = 0; j < turns.length; j++) {		
		// find the range
		var left = turns[j][0], right = turns[j][1];		
		// if the light's in the range, run toggle on it
		if (left < right) {
			for (var p = left; p <= right; p++) {								
				onOrOff[p] = toggleSwitch(p);				
			} 
		} else if (left > right) {
			for (var q = left; q >= right; q--) {
				onOrOff[q] = toggleSwitch(q);
			}
		} else {			
			onOrOff[left] = toggleSwitch(left);
		}		
	}
	console.log('FINAL', onOrOff);
	// count the 1's
	onOrOff.forEach(function(item, index) {
		result += item;
	})
	return result;
	
};

// TEST
// console.log(countLights(10, [3, 6], [0, 4], [7, 3], [9, 9]));

// console.log(countLights(5, [1, 3], [0, 2], [2, 4])); // 3
//console.log(countLights(1000, [616, 293],[344, 942],[27, 524],[716, 291],[860, 284]));


