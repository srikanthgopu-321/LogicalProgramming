var cal = require("../UtilityFiles/utility");
var userInput = require('readline-sync');

let string1 = userInput.question("enter string 1 \n");
let string2 = userInput.question("enter string 2 \n");
let check = cal.isAnagram(string1,string2);

console.log(check);