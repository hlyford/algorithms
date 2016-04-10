function stringPermutation( string ){

  let solutions = []
  let map = {}
  
  for(let i=0; i<string.length; i++){
    map[string[i]] = true
  }
  
  function helper( permutation ){
    
    // termination case  (when current string.length is equal to input string length)
    if(permutation.length === string.length){
      // push our permutation string into array
      solutions.push(permutation)
      // return
      return
    }
    
    // for every letter in string
    for(let char in map){
      // recursive case 
      if(map[char]){
        map[char] = false
        helper(permutation + char)
        map[char] = true
      }
    }    
  }
  
  helper('')
  return solutions
}

console.log(stringPermutation("hey5"));





// **Algorithm Design Manual**

function backtrack( state, k, input ){
  var candidates,
      i,
      length;
  
  if( isSolution( state, k, input ) ){
    processSolution( state, k );
  }
  else{
    k += 1;
    
    candidates = generateCandidates( state, k, input );
    
    for( i = 0, length = candidates.length; i < length; i += 1 ){
      state[ k ] = candidates[ i ];
      
      makeMove( state, k, input );
      backtrack( state, k, input );
      unMakeMove( state, k, input );
      
      if( isFinished ){
        return;
      }
    }
  }
}