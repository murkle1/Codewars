//in an array of names

function whosPaying(names){
    let numberOfPeople = names.length;
    let randomPosition = Math.floor(Math.random() * numberOfPeople); // rngesus
    let randomPerson = names[randomPosition]

    return randomPerson
}