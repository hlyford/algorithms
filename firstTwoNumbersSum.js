// given array of numbers and a number, return the indexes of the first 2 numbers that sum up to that number

// Input: (array of numbers, target number)
// Output: array of two numbers e.g. [index1, index2]
// ConstraintsT: aim for best optimization
// ConstaintsS: best possible
// Edges: negatives, floats, duplicates

// SampleInput: ( [4, 7, 2, 4, 0 ] , 6 )
// SampleOutput: [0, 2]  

// NAIVE
// outer loop i  4
  
  // inner loop j  2
    // return i and j


// differences = {
//   4: 2, // first pair that works
//   7: -1,
//   2: 4,
//   4: 2,
//   0: 6
// }

// differences2.0 = {
//   2: 0, 
//  -1: 1
//  
// }

// if (array[i] in differences2.0) {
//  return [ differences2.0[array[i]] , i ] // [0, 2] 


var firstTwoNumbers = function (arr, target) {
  var differences = {};
  for (var i = 0; i < arr.length; i++) {
    // check if the value is in differences object
    if (arr[i] in differences) {
      return [differences[arr[i]] , i ];
    } else if (target - arr[i] in differences) {            
      
    } else {
      differences[target - arr[i]] = i;
    }
  }
  return null;
}

// SampleInput: ( [4, 7, 4, 2, 4, 0 ] , 6 )  // [0, 3]
console.log(firstTwoNumbers( [4, 7, 4, 2, 4, 0 ] , 6 ));