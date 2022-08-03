function getCount(str) {
    //start at 0 
    //make sure input is a string
    // for every a e i o u, increase count by 1
    let vowelCount = 0 
    const vowels = ["a", "e", "i", "o", "u"]
    for (let char of str) {
      if (vowels.includes(char)) {
        vowelCount++
      }
    }
    return vowelCount;
  }