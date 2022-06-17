// You will be given a sequence of objects (associative arrays in PHP) representing data about developers who have signed up to attend 
// the next coding meetup that you are organising.

// Your task is to return:

// true if all of the following continents / geographic zones will be represented 
// by at least one developer: 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania'.
// false otherwise.


function allContinents(list) {
    // our parameter is an array of objects we are given
    //objects will follow the same pattern and all continents will be capitalized
    // we want our return to be a boolean, we want true if all 5 continents 
    // are present in the array of objects
    // example [{continent: Africa}] --> false because only one of the 5 continents is present in the array of objects 
    // i want to have an empty object as a place for just the contients to go 
    let newObj = {}
    
  // use a for of loop to loop through the objects in the array and pull the continent key lavue pair
    // conditional to add the continents to the new obj
    for(let dev of list){
      if(newObj[dev.continent] > 0){
        newObj[dev.continent]++
      }else{
        newObj[dev.continent] = 1
      }
    }
    
    let keys = Object.keys(newObj)
    console.log(keys)
    
    if(keys.length >= 5){
      return true
    }else{
      return false
    }
  }