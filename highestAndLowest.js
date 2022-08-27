function highAndLow(numbers){
    numbers = numbers.split(' ');
    // (' ') splits into each value 
    // ('') splits into each character
    // () splits into array
    return Math.max(...numbers) + ' ' + Math.min(...numbers); // highest + space + lowest
  }