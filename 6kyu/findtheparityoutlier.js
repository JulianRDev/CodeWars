function findOutlier(integers){
    //your code here
    // P: paramter is an array of numbers either all odd or even w/ one of the opposite
    // R:return should be a single number from the array
    // E: return 1
    //P:
    //loop through integers array
    
    let evenArr = []
    let oddArr = []
    
    // determine if array majority is even or odd
    for(let i = 0; i < integers.length; i++){
      if (integers[i] % 2 === 0){
        evenArr.push(integers[i])
      } else{
        oddArr.push(integers[i])
      }
    }
    
    console.log(evenArr)
    console.log(oddArr)
    
    // find the one number that is odd if the whole array is even 
    // and find even number if whole array is odd
    // return that number
    if(evenArr.length > oddArr.length){
      return oddArr[0]
    } else{
      return evenArr[0]
    }
    
  }