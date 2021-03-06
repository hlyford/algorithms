// You are a renowned thief who has recently switched from stealing precious metals to
// stealing cakes because of the insane profit margins. You end up hitting the jackpot,
// breaking into the world's largest privately owned stock of cakes—the vault of the Queen of England.
// While Queen Elizabeth has a limited number of types of cake, she has an unlimited supply of each type.

// Each type of cake has a weight and a value, stored in an object with two properties:

// weight: the weight of the cake in kilograms
// value: the monetary value of the cake in British pounds
// For example:

//   // weighs 7 kilograms and has a value of 160 pounds
// {weight: 7, value: 160}

// // weighs 3 kilograms and has a value of 90 pounds
// {weight: 3, value: 90}

// You brought a duffel bag that can hold limited weight, and you want to make off with the most valuable haul possible.

// Write a function maxDuffelBagValue() that takes an array of cake type
// objects and a weight capacity, and returns the maximum monetary value the duffel bag can hold.

// For example:

  var cakeTypes = [
    {weight: 7, value: 160},
    {weight: 3, value: 90},
    {weight: 2, value: 15},
];

var capacity = 20;

console.log(maxDuffelBagValue(cakeTypes, capacity));
// // returns 555 (6 of the middle type of cake and 1 of the last type of cake)

// Weights and values may be any non-negative integer. Yes, it's weird to think
// about cakes that weigh nothing or duffel bags that can't hold anything. But we're not just
// super mastermind criminals—we're also meticulous about keeping our algorithms flexible and comprehensive.

function maxDuffelBagValue(cakeTypes, capacity cakes) {
	cakes = cakes || 0;
	// recursively:
		// base: bag can no longer fit any type of cake
			// return the amount of cake value
		// recursive: can fit a cake
			// try most efficient to least efficient
			// return result of calling function again adding the new cake

	// if the minimum weight cake can't fit, return
	var orderedByWeight = cakeTypes.sort(function (a,b) {
		return a.weight > b.weight;
	});
	var orderedByEfficency = cakeTypes.sort(function (a, b) {
		return (b.value/b.weight) > (a.value/a.weight);
	});

	// base case: don't add any more value
	if (capacity < orderedByWeight[0]) {
		return 0;
	} else {
		// add the value of the next cake added and concate to make a total amount
		var hit = false;
		for (var i = 0; i < orderedByEfficency.length; i++) {
			if (orderedByEfficency[i].weight <= capacity) {
				return parseInt(orderedByEfficency[i].value) + parseInt(maxDuffelBagValue(cakeTypes, capacity - orderedByEfficency[i].weight));
				i = orderedByEfficency.length;
				hit = true;
			}
		}
	}
};

// ANSWER BELOW
  function maxDuffelBagValue(cakeTypes, weightCapacity) {

    // we make an array to hold the maximum possible value at every
    // duffel bag weight capacity from 0 to weightCapacity
    // starting each index with value 0
    var maxValuesAtCapacities = [];
    for (var i = 0; i <= weightCapacity; i++) {
        maxValuesAtCapacities[i] = 0;
    }

    for (var currentCapacity = 0; currentCapacity <= weightCapacity; currentCapacity++) {

        // set a variable to hold the max monetary value so far for currentCapacity
        var currentMaxValue = 0;

        // we use a for loop here instead of forEach because we return infinity
        // if we get a cakeType that weighs nothing and has a value. but forEach
        // loops always return undefined and you can't break out of them without
        // throwing an exception
        for (var j = 0; j < cakeTypes.length; j++) {
            var cakeType = cakeTypes[j];

            // if a cake weighs 0 and has a positive value the value of our duffel bag is infinite!
            if (cakeType.weight === 0 && cakeType.value !== 0) {
                return Infinity;
            }

            // if the current cake weighs as much or less than the current weight capacity
            // it's possible taking the cake would give get a better value
            if (cakeType.weight <= currentCapacity) {

                // so we check: should we use the cake or not?
                // if we use the cake, the most kilograms we can include in addition to the cake
                // we're adding is the current capacity minus the cake's weight. we find the max
                // value at that integer capacity in our array maxValuesAtCapacities
                var maxValueUsingCake = cakeType.value + maxValuesAtCapacities[currentCapacity - cakeType.weight];

                // now we see if it's worth taking the cake. how does the
                // value with the cake compare to the currentMaxValue?
                currentMaxValue = Math.max(maxValueUsingCake, currentMaxValue);
            }
        }

        // add each capacity's max value to our array so we can use them
        // when calculating all the remaining capacities
        maxValuesAtCapacities[currentCapacity] = currentMaxValue;
    }

    return maxValuesAtCapacities[weightCapacity];
}




