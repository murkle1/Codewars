function isPalindrome(x) {
    let lowerCase = x.toLowerCase();
    
    //split
    let split = lowerCase.split("");
    //reverse
    let reverseArray = split.reverse("");
    //join 
    let joinedArray = reverseArray.join("");
    
    //check if palindrome
    if(lowerCase === joinedArray.toLowerCase("")){
      return true
    }else{
      return false
    }
    
  }