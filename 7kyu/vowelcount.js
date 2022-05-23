// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.




function getCount(str) {
    let vowelsCount = 0;
    let v = ["a","e","i","o","u"];
    
    
    
    
    for(var i = 0;i < str.length;i++){
      
      for(var s=0;s<v.length;s++){
        
        if(str[i] === v[s]){
          vowelsCount++;
        }
      }
    }
    
    return vowelsCount;
  }