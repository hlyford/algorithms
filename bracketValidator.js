// You're working with an intern that keeps coming to you with JavaScript code
// that won't run because the braces, brackets, and parentheses are off.
// To save you both some time, you decide to write a braces/brackets/parentheses validator.
// Let's say:

// '(', '{', '[' are called "openers."
// ')', '}', ']' are called "closers."
// Write an efficient function that tells us whether or not an input string's openers and closers are properly nested.

// Examples:

var testTrue1 = "{ [ vfv] (asrv ) }" // should return True
var testFalse1 =  "{ [ ( ] ) }" // should return False
var testFalse2 = "{ nvioebio[ erber }" // should return False


// stack approach: add the most recent opener to the opener stack
	// pop off when you hit a closer that matches the top of the stack
	// skip anything that's not a bracket

var openers = ['(', '[', '{'];
var closers = [')', ']', '}'];

var Stack = function() {
	var obj = {};
	obj.storage = [];

	// methods for stack
	obj.add = function(item) {
		obj.storage.push(item);
	};
	obj.pop = function() {
		obj.storage.pop();
	};

	return obj;
}

function checker (str) {
	var stack = Stack();
	var count = 0;
	// if the stack is not empty, check if a closer that matches top of stack
	while (str.length > 0) {

		if (closers.indexOf(str[count]) !== -1) {
			// if stack is empty, there's no match
			if (stack.storage.length === 0) {
				return false;
			} else {
				// if the index of the closer matches the index of the opener on top of stack, pop off the opener
				if (closers.indexOf(str[count]) === openers.indexOf(stack.storage[stack.storage.length - 1])) {
					stack.pop();
				} else {
					return false;
				}
			}
		} else if (openers.indexOf(str[count]) !== -1) {
			// if not, and it's an opener, add to stack
			stack.add(str[count]);
		}
		// cut downt the string and increcement count
		str = str.slice(1);
		count++;
	}

	return true;
}


// tests
console.log(
	checker(testTrue1), checker(testFalse1), checker(testFalse2)
);