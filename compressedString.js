//Input: ‘aabcccccaaa’ 
//Output: ‘a2b1c5a3’


var compressedString = function(str) {  
  // if the string is less than three characters, it cannot be made shorter
  if (str.length <= 2) {
		return str;
	}

  var compressedStr = '';
  var prevChar = str[0];
  var count = 1;

  for (var i = 1; i < str.length; i++) {
    // if the current item is not equal to the one before, add the letter and count to the result
    if (str[i] !== prevChar) {
      compressedStr += prevChar + count;
      // increase the previous char to the current one
      prevChar = str[i];
      // reset count
      count = 1;
    } else {
      count++;
    }
  }
  // add the final item to the string
  compressedStr += prevChar + count;

  // return the compresses string if it's shorter than the original
  return compressedStr.length >= str.length ? str : compressedStr;
};

console.log(compressedString("aabcccccaaa")); 