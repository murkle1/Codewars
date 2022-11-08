function countSheeps(arrayOfSheep) {
    let counter = 0
    for (let i = 0; i < arrayOfSheep.length; i++) {
        if (arrayOfSheep[i]) counter += 1 // arrayOfSheep[i] doesnt need = true bc the data in array is already true/false
    }
    return counter
}