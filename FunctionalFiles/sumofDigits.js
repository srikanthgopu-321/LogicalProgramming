var cal = require("../UtilityFiles/utility");
var userInput = require('readline-sync');

let n = userInput.question("enter any number\n");

let result = cal.digitalsum(n);
console.log("the sum of given digital number is :"+result);