class Thermostat {
    constructor(fahrenheit){
      this.fahrenheit = fahrenheit;
    }
    get temperature() {
      return 5/9 * (this.fahrenheit - 32);
    }
    set temperature(celsius) {
      this.fahrenheit = (celsius * 9.0) / 5 + 32;
    }
  } 

  /* Getter functions are meant to simply return (get) the value of an object's private variable to the user without the user directly accessing the private variable.

Setter functions are meant to modify (set) the value of an object's private variable based on the value passed into the setter function. This change could involve calculations, or even overwriting the previous value completely.
 This is the power of a getter and a setter. You are creating an API for another user, who can get the correct result regardless of which one you track.This is the power of a getter and a setter. You are creating an API for another user, who can get the correct result regardless of which one you track.
