function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
    return enteredCode === correctCode && Date.parse(currentDate) <= Date.parse(expirationDate)
  
   }
//Date.parse() is a method that calculates the amount of time in miliseconds since January 1, 1970, 00:00:00 UTC