function getFirstPython(list) {
    // Thank you for checking out my kata :)
    // given an array with objects as the parameter
    // the return should be a string thar says if there will be no python devs 
    // or if there is, that devs name and country
    // [{firstName: 'julian', country: 'United States' language: 'python'}] --> return "Julian, United States"
    //[{firstName: 'Paul'}, country: 'Mexico', language: 'JS'}] --> 'There will be no Python devs'
    // 
    
    // use a for ... of loop to iterte through the objects
    // in the for of loop we want to make a conditional to see if any of 
    // the devs have a language property value of 'Python'
    // if any of the devs do then we want to return that devs name and country
    for(let obj of list){
      if(obj.language === 'Python'){
        return `${obj.firstName}, ${obj.country}`
      }
    }
    return `There will be no Python developers`
  }