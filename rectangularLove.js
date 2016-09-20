// Write a function to find the rectangular intersection of two given love rectangles.

// As with the example above, love rectangles are always "straight" and never "diagonal."
// More rigorously: each side is parallel with either the x-axis or the y-axis.

// They are defined as objects ↴ like this:

//   var myRectangle = {

//     // coordinates of bottom-left corner
//     leftX: 1,
//     bottomY: 5,

//     // width and height
//     width: 10,
//     height: 4,

// };

// Your output rectangle should use this format as well.

// ------- END PROMPT --------- //

// input: two objects representing rectangle dimensinos
// output: one object for rectangle of overlap
// time/space constraints: none so far
// edge cases: only one rectangle given; no overlap; one inside the other totally; negative rectangles

// example inputs:
var myRectangleOne = {
  // coordinates of bottom-left corner
  leftX: 1,
  bottomY: 5,
  // width and height
  width: 10,
  height: 4,
};
var myRectangleTwo = {
  // coordinates of bottom-left corner
  leftX: 4,
  bottomY: 2,
  // width and height
  width: 4,
  height: 8,
};

var recMaker = function(rect1, rect2) {
	// archetypal case: perfect overlap
	var heightNew = Math.min((rect1.bottomY + rect1.height), (rect2.bottomY + rect2.height)) - Math.max(rect1.bottomY, rect2.bottomY);
	var widthNew = Math.min((rect1.leftX + rect1.width), (rect2.leftX + rect2.width)) - Math.max(rect1.leftX, rect2.leftX);
	var bottomY = Math.max(rect1.bottomY, rect2.bottomY);
	var leftX = Math.max(rect1.leftX, rect2.leftX);
	var finalRect = {leftX: leftX, bottomY: bottomY, width: widthNew, height: heightNew};

	return finalRect;
}


console.log(recMaker(myRectangleOne, myRectangleTwo));








