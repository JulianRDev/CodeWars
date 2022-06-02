// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

function findOdd(integers) {
    //happy coding!
    let counter = 0
    
    for(let i = 0; i < integers.length; i++){
      for(let o = 0; o < integers.length; o++){
        if(integers[i] == integers[o]){
          counter++
        }
      }
      if(counter % 2 != 0){
        return integers[i]
      }
    }
  
  }