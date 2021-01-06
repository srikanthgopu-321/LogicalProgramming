var userInput = require("readline-sync");
var size = Number(userInput.question("enter the size of the array"));

let inputArray = [ ];

for(let i=0; i < size; i++ ) {
    inputArray[i]= userInput.question();
}

let k = Number(userInput.question("enter kth element"));
console.log(k);

//print array before swapping
console.log("before swapping")

for(let i = 0; i < size; i++) {
    console.log(inputArray[i]);
}

//swap the numbers

var temp = inputArray[k - 1];
inputArray[k - 1] = inputArray[size - k];
inputArray[size - k] = temp;

//print after swapping
console.log("after swapping");

for(let i = 0; i < size; i++) {
    console.log(inputArray[i]);
}