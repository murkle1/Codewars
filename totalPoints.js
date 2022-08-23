function points(games) {
    // w is the 'current value'
    // if array deals with ratios
    //is x > y? then 3 
    // 0 is the initial or starting value for this reduce method
    return games.reduce((w, [x,_,y]) => w + (x > y ? 3 : x == y), 0)
  }