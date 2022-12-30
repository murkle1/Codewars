// main function 
function getMilk(money, costPerBottle) {

    let numberOfBottles = Math.floor(money / costPerBottle);

    console.log("buy " + calcBottles(money, costPerBottle) + " bottles of milk");
    return calcChange(money, costPerBottle)
}

//how many bottles you can buy

function calcBottles(startingMoney, costPerBottle) {

    let numberOfBottles = Math.floor(startingMoney, costPerBottle);

    return numberOfBottles;
}
 
//change 

function calcChange(startingAmount, costPerBottle) {
    let change = startingAmount % costPerBottle
    return change
}

console.log("yo! here is your " + getMilk(10, 3) + " change.")