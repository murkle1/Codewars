function filter_list(l) {
    return l.filter(v => typeof v == 'number')
  }
  
  //filter returns a 'copy' of the array
  //filter 'makes' new array with indexes that pass the requirement above