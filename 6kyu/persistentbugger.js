// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, 
// which is the number of times you must multiply the digits in num until you reach a single digit.

// For example (Input --> Output):


function persistence(num) {
    //code me
   //P: a function that multiplys numbers with more that one digit by
   //its individual digits until the sum is a single digit
   //R: should return a single digit number\
   //E: 999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
   //P: 
     // set a variable for counting each time we multiply again
   let counter = 0
   // turn numbers to strings and split them to be multiplied by one another
   let splitNums = num.toString().split('')
 // while number is more than a single digit we want to multiply those digits by each other
   while(splitNums.length > 1){
     // results should be 1 so the multiplication of numbers work, not 0 because anything times 0 is 0 
     let results = 1 
     // iterate through every number in splitNums and multiply 
     for(let i = 0; i < splitNums.length; i++){
       
       results = results * splitNums[i]
       }
       // counter goes up one each time we multiply
       counter ++
       // resetting splitNums so we can the operation until we hit a 
     // single digit which would end loop
     // and don't get an infite loop
       splitNums = results.toString().split('')
       
   }
   
   return counter
 }