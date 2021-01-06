var cal = require("../UtilityFiles/utility");
var userInput = require("readline-sync");

 quantity = userInput.question("enter the quantity");
 price_per_iterm = userInput.question("enter price per iterm");

let w = cal.expenses(Number(quantity),Number(price_per_iterm));

console.log(w); 
