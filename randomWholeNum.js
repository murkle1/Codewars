function randomWholeNum() {
    return Math.floor(Math.random() * 10);
  }

  // this will return a random number between 0-9.
  // math.random gives a random decimal from 0-1 but never 1
  // math.floor rounds the number down to the nearest whole number
  // multiplying it by 10 will give us a number from 0-9 