let name = prompt("What is your name?")

let upperCaseFirstChar= name.slice(0,1).toUpperCase();

let restOfName = name.slice(1, name.length).toLowerCase();

alert("Hello " + upperCaseFirstChar + restOfName)

// alert("Hello " + name);