function descendingOrder(n){
    return Number(n.toString().split('').sort((a,b)=> b-a).join(''));
  }
  
  //Number is a constructor that has to be used when manipulating integers
  