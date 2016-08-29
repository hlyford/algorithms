'use strict';

let stub = [
	'hi', 35, function() {console.log('yo');},
	{me: 'no', you: 6}, [[6, 2],[[0], 1]]
];

function stringify (input, comma) {
	comma = comma ? ',' : '';
	if (typeof input === 'function') {
		return 'null,';
	}
	if (typeof input === 'number') {
		let result = input.toString() + comma;
		return result;
	}
	if (typeof input === 'string') {
		let res = '"' + input + '"' + comma;
		return res;
	}
	if (Array.isArray(input)) {

		var doStuff = function() {
			var res = '[';
			input.forEach(function(item, index) {
				comma = index === input.length - 1 ? false : true;
				res += stringify(item, comma);
			});
			return res + ']';
		}
		return doStuff();
	}
	if (typeof input === 'object') {
		var doStuff = function() {
			let res = '{';
			for (var key in input) {
				res += stringify(key) + ':' + stringify(input[key]) + ',';
			}
			// loop from the end and remove the last comma
			var toRemove;
			for (var i = 0; i < res.length; i++) {
				if (res[i] === ',') {
					toRemove = i;
				}
			}
			res = res.slice(0, toRemove) + res.slice(toRemove + 1, -1);
			return res + '}';
		}
		return doStuff();
	}
}

console.log(stringify(stub));
console.log(JSON.stringify(stub));