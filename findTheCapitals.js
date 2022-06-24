function capitals(word) {
    const result = [];
  
    const letters = word.split(''); //makes the word into an array [word]
    letters.forEach((letter, index) => {
      if(letter == letter.toUpperCase()) {
        result.push(index);
      }
    });
  
    return result;
  }