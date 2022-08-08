function friend(friends){
    let output = []; // because we are returning the output
    for (let i = 0; i < friends.length; i++){ // for each item in the array length, 
      if (friends[i].length === 4){ // if the item in the index is === 4, push into new array []
        output.push(friends[i])
      }
    }
    return output
  }