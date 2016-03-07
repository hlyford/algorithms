// Description

// A number of sailors (let's call it N) are stranded on an island with a huge pile of coconuts and a monkey. During the night, 
// each sailor (in turn) does the following without the others knowing:
// He takes one N'th (e.g. if N=5, one fifth) of the coconuts in the pile and hides them
// The division leaves one coconut left over, which is given to the monkey.
// In the morning, they split the remaining coconuts between them. This time the split is even. 
// There's nothing left over for the monkey.
// Your task: Given the number of sailors (N), how many coconuts were in the pile to begin with (lowest possible number)?
// Formal inputs/outputs

// Input

// The input is a single number: N, the number of sailors. This number is a whole number that is greater than or equal to 2.
// Output

// The output is a single number: the number of coconuts in the original pile.
// Sample input/output

// Input:
// 5
// Output:
// 3121

var coconuts = function(numSailors) {
		
	var tester = 0;
	while ((cocos  % numSailors !== 0 /*&& tester < 5000*/) || cocos === 0) {
		tester++;
		var cocos = tester;
		for (var i = 0; i < numSailors; i++) {
			if (cocos % 1 !== 0) {continue;}
			cocos = cocos - 1 - ((cocos - 1)/numSailors);			
		}	
		console.log('tester ', tester, ' and cocos ', cocos);		
	}
	return tester;
}

// TEST
console.log(coconuts(5)); // 3121