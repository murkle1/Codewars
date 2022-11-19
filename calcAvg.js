function findAverage(array) {
    if(array.length === 0){
      return 0
    }else{
      return array.reduce((prev,curr) => prev + curr) / array.length
    }
   }