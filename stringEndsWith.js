function solution(str, ending){ // abcd, ''
    let strSplit = str.split('') // a, b, c, d
    let endSplit = ending.split('') // ''
    
    if(ending === ''){
       return true
       }else if(strSplit.slice(-endSplit.length).join('') === endSplit.join('')){
      return true
    }else{
      return false
    }
  }
  
// CANNOT COMPARE ARRAYS TO ARRAYS UNLESS THEY ARE THE SAME REFERENCE  