//You are playing the following Nim Game with your friend: There is a heap of stones on the table, 
//each time one of you take turns to remove 1 to 3 stones. The one who removes the last stone will be the winner. 
//You will take the first turn to remove the stones.

//Both of you are very clever and have optimal strategies for the game. Write a function to 
//determine whether you can win the game given the number of stones in the heap.

// For example, if there are 4 stones in the heap, then you will never win the game: 
// no matter 1, 2, or 3 stones you remove, the last stone will always be removed by your friend.

// input: num stones
// output: true/false for if I won
// Ct: none
// Cs: none

// p1 = me, p2 = her

var nim = function(numStones, playerTurn) {	
	// base case: someone can end the game
	if (numStones <= 3) {
		return playerTurn === 'p1' ? true : false;
	}
	// recursive case: keep going, pick the option that will allow you to win the game
	else {
		if (playerTurn === 'p1') {
			// check the results for each possible play
			var moves = [nim(numStones - 3, 'p2'), nim(numStones - 2, 'p2'), nim(numStones - 1, 'p2')];			
			for (var i = 0; i < moves.length; i++) {
				if (moves[i]) { 					
					return moves[i]; 
				} 
			}
			// if you can't win, move take one stone
			return moves[2];
		} else {
			var moves = [nim(numStones - 3, 'p1'), nim(numStones - 2, 'p1'), nim(numStones - 1, 'p1')];
			for (var i = 0; i < moves.length; i++) {
				if (!moves[i]) { return moves[i]; } 
			}
			return moves[2];
		}
	}

}

//TEST
// console.log(nim(8, 'p1'));