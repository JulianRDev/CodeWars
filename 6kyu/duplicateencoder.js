// The goal of this exercise is to convert a string to a new string where each character in 
// the new string is "(" if that character appears only once in the original string, or ")" 
// if that character appears more than once in the original string. Ignore capitalization when determining 
// if a character is a duplicate.




function duplicateEncode(word){
    // ...
  //P: our parameter is a string
  //R: want to return string 
  //E: return a variable that value is a string -- "Success"  =>  ")())())"
  //P:
  // declare a variable to word lowercase and split
  let letters = word.toLowerCase().split('')
  // declare a variable with an empty string
  let newWord = ''
  

  // loop through letters in the word to find any duplicates or not
  letters.filter((letters,i,arr) => {
    if(arr.indexOf(letters) === i && arr.lastIndexOf(letters) === i){
      newWord += "("
    }else{
      newWord += ")"
    }
  })
    return newWord
}