function capitalize(s){
    return [s.split('').map((v,i)=>i%2==0?v.toUpperCase():v.toLowerCase()).join(''),
            s.split('').map((v,i)=>i%2!==0?v.toUpperCase():v.toLowerCase()).join('')]
  };

  // map has a function inside it.
  // map will call the function inside it to every element in parent array.
  // string argument will be first SPLIT, and then the map function will UPPERCASE if %2 == 0
