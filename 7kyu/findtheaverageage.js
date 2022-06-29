
// write a function that returns the average age of developers (rounded to the nearest integer). In the example above 
// your function should return 50 (number).


function getAverageAge(list) {
    // thank you for checking out the Coding Meetup kata :)
    // we are given a parameter that is an array of object
    // we can assume that the object will follow the same pattern
    // we want our return to be a number that is the average of the ages in each object in the array
    //ex: [{age: 30}{age: 70}] --> 50
    // create a new array for the ages
    let ages = []
    
    let sum = 0
    
    for(let age of list){
      ages.push(age.age)
    }
    
    for(let i = 0; i < ages.length; i++){
      sum += ages[i]
    }
    
    return Math.round(sum / ages.length)
    
    
    
  }