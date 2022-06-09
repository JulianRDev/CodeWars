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
    let newOrder = sortNums.join('')
    // return new order
    return Number(newOrder)
    
    
  }