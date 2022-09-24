const uppercaseString = (string) => {
    return string.toUpperCase();
  }
  
  const lowercaseString = (string) => {
    return string.toLowerCase()
  }
  
  export { uppercaseString, lowercaseString };

  // functions are in a separate file, and can 'export' the functions when in another file to not rewrite the code