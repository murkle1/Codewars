function repeatStr (n, s) {
    let result = '';
    
    for(let i = 1; i <= n; i += 1) {
      result += s;    
    }
    
    return result;
  } 

  //OR 

//   function repeatStr (n, s) {
//     return s.repeat(n);
//   }