array.length - gets array length 

array.push - adds element to end of the array
array.pop - removes the element from the end of the array

array.unshift - adds element to begining of array 
array.shift - removes element from the begining of array\

array.splice(x,y,z) - removes any number of consecutive elements in array   
    x - where to start 
    y - how many to delete starting from x 
    z - elements to add to the array starting from x

array.slice(x,y) - does not touch original array, extracts elements from original array and puts it into a new array
                  - where to start extraction 
                  - where to stop but not including the index   

spread operator - [...array] - will copy referred array
    can combine [...array] into [this, is, a, [...array] in, an, array]

array.indexOf(x) - returns the index of existing element. -1 if does not exist

looping through array 
    let new arr = []
    for (let i = 0; i <arr.length; i++){
        //whatever you want to do to each element in array 
    }

use bracket notation when accessing property names!!!

object.hasOwnPropery('x') - true/false
object.keys() - returns array of all the keys 



