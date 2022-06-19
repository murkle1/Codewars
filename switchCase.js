String.prototype.toAlternatingCase = function () {
    const reg = /[A-Z]/; // review what this does lol
    let result = '';
    
    for(let i = 0; i < this.length; i += 1) {
      if(reg.test(this[i])) {
        result += this[i].toLowerCase();
      } else {
        result += this[i].toUpperCase();
      }
    }
    
    return result
  }