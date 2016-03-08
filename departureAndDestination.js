// you are on a biz trip and travelling from one city to another. you have a stack of 
// unsorted flight boarding passes. only departure city and destination 
// city are on the boarding pass. how do you find the first departure city and your 
// final destination city, write the solution in javascript.

var ticketSorter = function (tickets) {
	var origin, destination;
	var places = {};

	// loop through each and count the number of times it appears  {SFO: {org: 1, dests: 1} }
	for (var k = 0; k < tickets.length; k++) {
		tickets[k].forEach(function(item, index) {
			if (item in places) {
				if (index === 0) {
					places[item]['orgs']++;
				} else {
					places[item]['dests']++;
				}
			} else {
				if (index === 0) {
					places[item] = {orgs: 1, dests: 0};					
				} else {
					places[item] = {orgs: 0, dests: 1};
				}
			}
		})
	}
	
	for (var key in places) {
		if (places[key].orgs > places[key].dests) {
			origin = key;
		}
		if (places[key].dests > places[key].orgs) {
			destination = key;
		}
	}

	// for (var i = 0; i < tickets.length; i++) {
	// 	var isOrigin = true, isDestination = true;
	// 	// check if the current trip never appears as a destination
	// 	for (var j = 0; j < tickets.length; j++) {
	// 		if (tickets[i][0] === tickets[j][1]) {				
	// 			isOrigin = false;
	// 		}
	// 		if (tickets[i][1] === tickets[j][0]) {
	// 			isDestination = false;
	// 		}
	// 	}
	// 	// if it didn't have a matching destination/origin, then it's the one
	// 	if (isOrigin) { origin = tickets[i][0]; }
	// 	if (isDestination) { destination = tickets[i][1]; }
	// }

	return origin + ' and ' + destination;
}

// TEST
// var tickets = [['SFO', 'LAX'], ['LAX', 'CO'], ['CO', 'BRAZIL'], ['BRAZIL', 'SFO'], ['SFO', 'BRAZIL']];
// console.log(ticketSorter(tickets));