function powersOfTwo(n){
    // loop starting at 0 and squares each ending with n. n = exponent
    let arr = [];
    for(let i=0; i<=n; i++)
      arr[i] = 2**i;
    return arr;
  }
