// You will be given an array of objects (associative arrays in PHP, table in COBOL) representing 
// data about developers who have signed up to attend the next coding meetup that you are organising.

// Your task is to return an object (associative array in PHP, table in COBOL) which 
// includes the count of each coding language represented at the meetup.


function countLanguages(list) {
  // we know that we are given an array of objects as the parameter
  // return we want to be another object with the languages as the property and the number of
  // coding languages that would be attending the event
  
// just going to be js, C, and ruby languages
// objects in the array will follow the same pattern
  // language values will not have special characters and only a beginnning capital letter
  // [{language: 'Ruby'}] -- > {Ruby: 1, JavaScript: 3}
  
  // create an empty object 
  
 let newObj = {}
  
  // want to use a for of loop to loop through the array of objects
  for(let dev of list){
    if (newObj[dev.language] > 0){
      
      newObj[dev.language]++
    } else{
      newObj[dev.language] = 1
    }
  }
  return newObj
}