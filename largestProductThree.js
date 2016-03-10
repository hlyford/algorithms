/* Write a function that finds the largest possible product of any three numbers
 * from an array.
 * 
 * Example:
 * largestProductOfThree([2, 1, 3, 7]) === 42
 *
 * Extra credit: Make your function handle negative numbers.
 */


var largestProductOfThree = function(array) {
  var biggestDifference = function(test, number1, number2, number3) {
    var difference1 = test - number1, difference2 = test - number2, difference3 = test - number3;
    var differences = {};
    differences[difference1] = number1, differences[difference2] = number2, differences[difference3] = number3;        
    var biggestDiff = Math.max(test - number1, test - number2, test - number3);    
    return differences[biggestDiff.toString()];
  };
  // only take two negative numbers at most
  // {-2: 2}
  var numbers = [];
  array.forEach(function(item, index) {
    numbers[index] = [item, Math.abs(item)];
  });
  // console.log(numbers);
  var negative1, negative2;
  // form best with negatives

  // form best without negatives
  var number1, number2, number3;  
  console.log('here', biggestDifference(9, 1, 5, 6));


};

console.log(largestProductOfThree([2, 1, 7, 3])); // 42
console.log(largestProductOfThree([2, 1, -7, -3])); // 42
