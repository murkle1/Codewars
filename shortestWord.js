
  //put into array
  //compare array lengths
  function findShort(s){
    let arr = s.split(' '); //splits string into array, each index = each word 
    let smallest = arr[0];
    for (let i = 0; i < arr.length; i++) {
      if(arr[i].length < smallest.length){
        smallest = arr[i];
      }
    }
    return smallest.length;
  }