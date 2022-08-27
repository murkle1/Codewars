// return masked string
function maskify(cc) {
    return cc.slice(0, -4).replace(/./g, '#') + cc.slice(-4)
  }
  //slice(-4) is targetting -4 indexes starting from array.length
  //slice (0, -4) is targetting: starting at index 0 to (above comment)
  // function is saying: 
  // starting at array 0, slice until (-4), then replace all characters in target to #, then add to slice(-4)