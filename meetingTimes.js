// Your company built an in-house calendar tool called HiCal. 
// You want to add a feature to see the times in a day when everyone is available.
// To do this, you’ll need to know when any team is having a meeting. 
// In HiCal, a meeting is stored as objects ↴ with attributes startTime and endTime. 
// These integers represent the number of 30-minute blocks past 9:00am.

// For example:

//   {startTime: 2, endTime: 3} // meeting from 10:00 – 10:30 am
// {startTime: 6, endTime: 9} // meeting from 12:00 – 1:30 pm

// Write a function condenseMeetingTimes() that takes an array of meeting time 
// ranges and returns an array of condensed ranges.

// For example, given:

//   [
//     {startTime: 0,  endTime: 1},
//     {startTime: 3,  endTime: 5},
//     {startTime: 4,  endTime: 8},
//     {startTime: 10, endTime: 12},
//     {startTime: 9,  endTime: 10},
// ]

// your function would return:

//   [
//     {startTime: 0, endTime: 1},
//     {startTime: 3, endTime: 8},
//     {startTime: 9, endTime: 12},
// ]

// Do not assume the meetings are in order. The meeting times are coming from multiple teams.

// In this case the possibilities for startTime and endTime are
//  bounded by the number of 30-minute slots in a day. But soon 
// you plan to refactor HiCal to store times as Unix timestamps 
// (which are big numbers). Write something that's efficient even when we 
//can't put a nice upper bound on the numbers representing our time ranges.



var condenseMeetingTimes = function(arr) {
  var results = [];
  // sort the meeting times by start time
  var sortByStart = function(a, b, prop) {
    prop = 'startTime';
    return a[prop] > b[prop];
  }
  var arrSorted = arr.sort(sortByStart);    

  // loop through and combine meetings if they overlap
  var current = {startTime: arrSorted[0].startTime, endTime: arrSorted[0].endTime};
  for (var i = 1; i < arrSorted.length; i++) {
    // if they DONT overlap
    if (!(current.endTime >= arrSorted[i].startTime)) {
      // console.log(arrSorted[i].endTime);
      results.push(current);
      current = {startTime: arrSorted[i].startTime, endTime: arrSorted[i].endTime};
    } else {
      // DO overlap, continue the current meeting      
      if (arrSorted[i].endTime > current.endTime) {        
        // if it goes later, make new end point for current meeting        
        current.endTime = arrSorted[i].endTime;
      }
    }
  }
  results.push(current);
  return results;
}

// TEST: normal
var times = [
    {startTime: 0,  endTime: 1},
    {startTime: 3,  endTime: 5},
    {startTime: 4,  endTime: 8},
    {startTime: 10, endTime: 12},
    {startTime: 9,  endTime: 10},
]

// console.log(condenseMeetingTimes(times));

// TEST: edge 1
var times2 =   [
    {startTime: 1, endTime: 10},
    {startTime: 2, endTime: 6},
    {startTime: 3, endTime: 5},
    {startTime: 7, endTime: 9},
]
console.log(condenseMeetingTimes(times2));
