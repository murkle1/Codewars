let array = [];
let count = 1;
// while loop
function fizzBuzz(){

    while (count <=100){

    if (count % 3 === 0 && count % 5 === 0) {
        array.push("FizzBuzz");
    }else if (count % 3 === 0){
        array.push("Fizz");
    }else if (count % 5 === 0){
        array.push("Buzz");
    }else{
        array.push(count)
    }

    count++;
    }
}

//for loop
let array = [];
let count = 1;
for(let count = 1; count<101; count++){
    if (count % 3 === 0 && count % 5 === 0) {
        array.push("FizzBuzz");
    } else if (count % 3 === 0) {
        array.push("Fizz");
    } else if (count % 5 === 0) {
        array.push("Buzz");
    } else {
        array.push(count)
    }
}