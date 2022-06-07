function duplicateCount(text){
    //...
    //p: text is a strimng of words or characters
    //r: need to return the number of duplicates in the string
    //e: return variable = number of duplicates
    //p: 
    
    // set a variable counter to 0
    
    let counter = 0 
    
    // split the text into single elements
    let newText = text.toLowerCase().split('')
    //filter through letters
    newText.filter((letter, i, arr ) => {
      // checking that the index arent equal to one another
      // and 
      if( arr.indexOf(letter) !== i && arr.lastIndexOf(letter) === i){
        counter++
      }
    })
    return counter
  }
  