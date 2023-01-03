let n = Math.random();
n = n * 6;
n = Math.floor(n) + 1
console.log(n)

// this is a standard d6 dice roll 
// scale math.random to any range u want by multiplying is to the range
// example, if you want a d20, multiply it by 20 instead and add 1,
// do not add + 1 if you want to include zero