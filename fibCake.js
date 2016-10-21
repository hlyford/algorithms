// Write a function fib() that a takes an integer nn and returns the nnth fibonacci ↴ number.
// Let's say our fibonacci series is 0-indexed and starts with 0. So:

//   fib(0); // => 0
// fib(1); // => 1
// fib(2); // => 1
// fib(3); // => 2
// fib(4); // => 3
// ...


function fib (nn) {
	// base case: number is 0 or 1
	if (nn === 1) return 1;
	if (nn === 0) return 0;
	// recursive case: number is not 0 or 1
	return fib(nn - 1) + fib(nn - 2);
};

// console.log(fib(2));

function memoFib (nn, memos) {
	// console.log(memos);
	var memos = memos || {};
	memos[0] = 0, memos[1] = 1;
	// check if we have it in the memo book, if so return that, if not, calculate
	if (nn in memos) return memos[nn];
	else {
		var a = memoFib(nn - 1, memos), b = memoFib(nn - 2, memos);
		memos[nn] = a + b;
	}
	return a + b;
};


// console.log(memoFib(34));