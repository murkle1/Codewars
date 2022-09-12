// write the function isAnagram
var isAnagram = function(test, original) {
    let lowercase1 = test.toLowerCase();
    let splat1 = lowercase1.split('');
    let sorted1 = splat1.sort();
    let joined1 = sorted1.join();
    
    let lowercase2 = original.toLowerCase();
    let splat2 = lowercase2.split('');
    let sorted2 = splat2.sort();
    let joined2 = sorted2.join();
    
    if(joined1 === joined2){
      return true
    }else{
      return false
    } 
  
  };
  