
var cal = require("../UtilityFiles/utility");
var userInput = require('readline-sync');

let num = userInput.question("enter any Number\n");

let y = cal.firstandLastSum(num);
console.log("the sum of first and last digit sum is "+y);