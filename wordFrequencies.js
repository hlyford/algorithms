// design a method to find the frequency of ocurrenes of any given word in a book. 
// what if you were running the algorithm multiple times?


var frequencyFinder = function(book, word) {
	var wordUpperFirst = '' + word[0].toUpperCase(), wordUpperEnd = word.slice(1, word.length), count = 0;
	var wordUpper = wordUpperFirst + wordUpperEnd;
	var words = [word, wordUpper];

	var currentWord = '';
	for (var i = 0; i < book.length + 1; i++) {				
		if (book[i] === ' ' || book[i] === '?' || book[i] === undefined) {			
			if (currentWord === words[0] || currentWord === words[1]) {				
				count++;
			}			
			currentWord = '';
		} else {
			currentWord += book[i];
		}
	} 
	
	return count;
}

var book = "isn't it pleasant to think so? so So";
console.log(frequencyFinder(book, 'so'));
