function oddOrEven(arr) {
    //sum of all elements
    let sum = arr.reduce ((acc, c) => acc + Number(c), 0) 
    // [1,2,3,4]
    //10
    // modulus the sum 
    let mod = sum % 2
    //if modulous = 0 then 'even' else "odd"
    if(mod == 0){
      return('even')
    }else{
      return('odd')
    }
  } 
