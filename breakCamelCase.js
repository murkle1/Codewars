// complete the function
function solution(string) {
    // in this, we're making a new string so:
    let newString = '';
    for (letter of string){
      if (letter == letter.toUpperCase()){
        newString += ' '; // this adds a space to the new string
        newString += letter; //this adds letter to new string
      }else{
        newString += letter;
      }
    }
    return newString
  }
  