function isIsogram(str){
    if (new Set(str.toLowerCase()).size == str.length){
      return true
    }else{
      return false
    }
    // new Set creates a new 'set' which is a 
    // constructor that only has unique values in it
    // .size is .length for set
    // so now we're comparing the size of the set
    // vs the size of the string.
    // if its the same value it is unique 
    }
    