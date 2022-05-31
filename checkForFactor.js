function checkForFactor (base, factor) {
    let checkForFactor = base % factor
    if (checkForFactor == 0){
      return true
    }else{
      return false
    }
  }