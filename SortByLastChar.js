const last = x =>
  x.split(' ').sort((a,b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1))
  
// split gives array of strings
//sort(a,b) compares a and b and sorts ascending, sort(b,a) would be descending alphabetically