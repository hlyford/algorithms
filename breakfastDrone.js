/*
Your company delivers breakfast via autonomous quadcopter drones. And something mysterious has happened.
Each breakfast delivery is assigned a unique ID, a positive integer. When one of the company's
100 drones takes off with a delivery, the delivery's ID is added to an array, deliveryIdConfirmations.
When the drone comes back and lands, the ID is again added to the same array.

After breakfast this morning there were only 99 drones on the tarmac. One of the drones never made it
back from a delivery. We suspect a secret agent from Amazon placed an order and stole one of our patented drones.
 To track them down, we need to find their delivery ID.

Given the array of IDs, which contains many duplicate integers and one unique integer, find the unique integer.

The IDs are not guaranteed to be sorted or sequential. Orders aren't always fulfilled in the order they
 were received, and some deliveries get cancelled before takeoff.
 */

 var deliveryIdConfirmations = [1, 3, 4, 1, 5, 5, 4];

 // general plan: sort through the array and find the number that doesn't have a match

 function finder (orders) {
 	// naive: loop through twice looping for lack of duplicate
 	for (var i = 0; i < orders.length; i++) {
 		var outer = orders[i], found = false;
 		for (var p = i + 1; p < orders.length; p++) {
 			var inner = orders[p];
 			if (outer === inner) {
 				found = true;
 			}
 		}
 		if (!found) {
 			return outer;
 		}
 	}
};

function finder2 (orders) {
	// loop through once,
		// check the map
		// if found, it's not it
			// remove from the object
	var map = {};
	for (var i = 0; i < orders.length; i++) {
		if (orders[i] in map) {
			delete map[orders[i]];
		} else {
			map[orders[i]] = true;
		}
	}
	// return the key for the only key value pair left in the hash map
	return Object.getOwnPropertyNames(map)[0];
};

 console.log(finder2(deliveryIdConfirmations));







