// You will be given an array a and a value x. All you need to do is check whether 
// the provided array contains the value.

// Array can contain numbers or strings. X can be either.

// Return true if the array contains the value, false if not.



function areYouPlayingBanjo(name) {
    // Implement me
   name = name.split('')
    if(name[0] === 'r' || name[0] === 'R'){
      return name.join('') +" plays banjo"
    }else{
      return name.join('') +" does not play banjo"
    }
  }

