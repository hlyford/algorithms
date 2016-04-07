// You're working with an intern that keeps coming to you with JavaScript code that 
// won't run because the braces, brackets, and parentheses are off. To save you both 
// some time, you decide to write a braces/brackets/parentheses validator. Let's say:

// '(', '{', '[' are called "openers."
// ')', '}', ']' are called "closers."
// Write an efficient function that tells us whether or not an input string's openers and closers are properly nested.

// "{ [ ] ( ) }" should return true
// "{ [ ( ] ) }" should return false
// "{ [ }" should return false


var openerChecker = function (str) {
	// remove whitespace
	str = str.replace(/\s/g, '');
	console.log(str);
	var openers = {'{': 0, '[': 1, '(': 2};
	var closers = {'}': 0, ']': 1, ')': 2};
	var openerTracker = [];

	for (var i = 0; i < str.length; i++) {
		// if it's an opener, add to the stack
		if (str[i] in openers) {
			openerTracker.push(str[i]);
		} else {
			// if the closer doesn't match with most recent open, not valid JS
			if (closers[str[i]] !== openers[openerTracker[openerTracker.length - 1]]) {								
				return false;
			} else {
			// else consider it a match and pop off that element from tracker
				openerTracker.pop();
			}
		}
	}
	return true;
}


// TEST
console.log(openerChecker("{ [ ] ( )    }")); // true
console.log(openerChecker("{{{ [ ] ( )    }}}")); // true
console.log(openerChecker("{ [ ( ] ) }")); // false 
console.log(openerChecker("{ [ }")); // false

// high level plan
	// keep track of open brackets in order 
		// if you see a closed bracket and it's not the most recent open one, return false
	
	// return true