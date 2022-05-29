// Write a function that accepts an array of 10 integers (between 0 and 9), 
// that returns a string of those numbers in the form of a phone number.


//----------------------------------------


// function that takes an array of numbers and turns it into a string

// numbers is the parameter the array of numbers being passed through
function createPhoneNumber(numbers){

    // set a variable assigned to a string with a phone Number structure((xxx) xxx-xxxx)
    let phoneNumber = '(xxx) xxx-xxxx'
    /*loop through every number in array and replace the the string in 
    phone Number variable*/
    for(let i = 0; i < numbers.length; i++){
      phoneNumber = phoneNumber.replace('x',numbers[i])
    }
    // return the array as a string 
    // return should also be set up as a phone Number
    return phoneNumber
  }