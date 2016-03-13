
var memos = {};

var fb = function(num) {	

	if (num === 0) {return 0;}
	else if (num === 1) {return 1;}
	else {
		if (num in memos) {
			console.log('found ', num);
			return memos[num];
		} else {			
			memos[num] = fb(num - 1) + fb(num - 2);			
			return memos[num];
		}
	}
};



// TEST
console.log(fb(10)); // 55  0.3s