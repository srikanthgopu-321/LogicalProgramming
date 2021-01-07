var userInput = require("readline-sync");
let s = userInput.question("enter a string\n");

function reverse(s){
    return s.split("").reverse().join("");
}
console.log(reverse(s));