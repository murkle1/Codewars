var number=function(array){
    //a = 1 , b = 2
    //return format ["1: a", "2: b", "3: c"]
    let output = []
    
    for(let i = 0; i < array.length; i++){
      output.push ((i + 1) + ": " + array[i])
    }
    
    return output
    
  } // push will push things inside () into the array that it is attached to