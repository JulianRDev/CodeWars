// You will be given an array of objects (hashes in ruby) 
// representing data about developers who have signed up to attend the coding 
// meetup that you are organising for the first time.

// Your task is to return the number of JavaScript developers coming from Europe.


function countDevelopers(list) {
    // your awesome code here :)
    // P: we are given an array with objects in it 
    // R: return the number of js devs coming from europe
    // E: 
    //P:
  // we need a counter for the amount of devs in europe
    // then we want to loop through the array
    // we want to compare the values of the language and the values of the continen
    // once we've done that we can add to the counter every 
    //time continent value and language value appear
    // then we can return counter
    
    let counter = 0
    for(let dev of list){
      if(dev.language === 'JavaScript' && dev.continent === 'Europe'){
        counter ++
      }
    }
    return counter
  }