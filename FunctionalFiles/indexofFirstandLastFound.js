var userInput = require("readline-sync");

let size = userInput.question("enter the size of the array");

let arrayName = [];

for(let i = 0; i < size; i++) {
    arrayName[i] = userInput.question();
}
let k = userInput.question("enter the element present in the array");
let position1= arrayName.indexOf(k);
let position2 = arrayName.lastIndexOf(k);
console.log(position1 +"  "+ position2);

console.log(arrayName);