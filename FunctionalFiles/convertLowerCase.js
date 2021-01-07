var userInput = require("readline-sync");
var str = userInput.question("enter the string \n");

function converLowerCase(str) {
    return str.toLowerCase();
}
console.log(converLowerCase(str));