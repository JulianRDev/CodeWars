// write a function that when executed as findAdmin(list1, 'JavaScript') 
// returns only the JavaScript developers who are GitHub admins:


function findAdmin(list, lang) {
    // thank you for checking out the Coding Meetup kata :)
   
    return list.filter(g => g.language === lang && g.githubAdmin === 'yes')
    
    
  }