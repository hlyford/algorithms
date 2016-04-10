// You decide to test if your oddly-mathematical heating company is 
// fulfilling its All-Time Max, Min, Mean and Mode Temperature Guarantee™.
// Write a class TempTracker with these methods:

// insert()—records a new temperature
// getMax()—returns the highest temp we've seen so far
// getMin()—returns the lowest temp we've seen so far
// getMean()—returns the mean ↴ of all temps we've seen so far
// getMode()—returns the mode ↴ of all temps we've seen so far
// Optimize for space and time. Favor speeding up the getter functions (getMax(), 
// getMin(), getMean(), and getMode()) over speeding up the insert() function.

// getMean() should return a float, but the rest of the getter functions can return integers. 
// Temperatures will all be inserted as integers. We'll record our temperatures in Fahrenheit, 
// so we can assume they'll all be in the range 0..1100..110.

// If there is more than one mode, return any of the modes.

function TempTracker () {
	this._storage = [];
	this._sorted = [];
}

TempTracker.prototype = {
	insert: function (temp) {
		this._storage.push(temp);
	},

	getMax: function () {		
		this.sorter();
		return this._sorted[sorted.length - 1];
	},

	getMin: function () {
		this.sorter();
		return this._sorted[0];
	},

	getMean: function () {
		this.sorter();
		// reduce the items in storage to get total then divide by total # of items
		var average = this._storage.reduce(function (total, current) {
			return total + current;
		})
		return average / this._storage.length;
	},

	getMode: function () {
		this.sorter();

		var numberAppearingMost = this._sorted[0], highestCount = 0, current = this._sorted[0], currentCount = 1;
		for (var i = 1; i < this._sorted.length; i++) {
			if (this._sorted[i] === current) {
				currentCount++;
			} else {
				if (currentCount > highestCount) {
					numberAppearingMost = current;
					highestCount = currentCount;
				}
				current = this._sorted[i];
				currentCount = 1;
			}
		}
		return numberAppearingMost;
	},

	sorter: function () {
		this._sorted = this._storage.sort(function (a, b) {
			return a > b;
		})		
	}

}

var tempTracker = new TempTracker();
tempTracker.insert(85);
tempTracker.insert(76);
tempTracker.insert(76);
tempTracker.insert(76);
tempTracker.insert(96);
tempTracker.insert(85);
// console.log(tempTracker.getMax());
// console.log(tempTracker.getMean());
console.log(tempTracker.getMode());
