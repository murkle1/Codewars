function switcheroo(x){
    return x.replace(/[ab]/g, function($1) { return $1 === 'a' ? 'b' : 'a' })
  }
  
  //replace has 2 parameters, (what you are targetting, what you are replacing with) 
  ///[ab]/g targets ab, and the 2nd parameter is a function that is a or b depending on what is given