// Your task is to make a function that can take any non-negative integer as an 
// argument and return it with its digits in descending order. 
// Essentially, rearrange the digits to create the highest possible number.


function descendingOrder(n){
    //...
    //P: the parameter iis a number
    //R: return should be the numbers in descending order as numbers
    //E: return 12345 as 54321
    //P:
    // set new variable making n a string
    let numbers = n.toString()
    // split the numbers 
    let numeros = numbers.split('')
    // sort numbers
    let sortNums = numeros.sort()
    // reverse sorting
    let reverseNums = sortNums.reverse()
    //join back together
    let newOrder = reverseNums.join('')
    // return new order
    return Number(newOrder)
    
    
  }