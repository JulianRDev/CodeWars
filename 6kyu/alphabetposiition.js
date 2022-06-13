
// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.


function alphabetPosition(text) {
    //P: want a function that takes a string and returns the number position of each letter in the alphabet
   //R: want the return to be a string of numbers
     //E: "The" -- => "20 8 5"
     //P:
     
     // need to declare a variable that we can push results to
     let results = []
     // need to declare a variable witha value of a string that is the alphabet
     let alphabet = "abcdefghijklmnopqrstuvwxyz"
     // set all letters to lowercase
     text = text.toLowerCase()
     // now we want to loop through each character in the text string 
     // to determine each letters numeric position in the alphabet
     for(let i = 0; i < text.length;i++){
       // set a variable to the indexOf to see what the index of 
       //text character in the alphabet variable we set earlier
       let indx = alphabet.indexOf(text[i])
       
       // compare if the character is actually a letter and exists
       if(indx === -1){
         continue
       }else{
         results.push(indx + 1)
       }
     }
     return results.join(' ')
   }
   