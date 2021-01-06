var cal = require("../UtilityFiles/utility");
var userInput = require("readline-sync");
const { withdraw } = require("../UtilityFiles/utility");
let initial_amount = Number(userInput.question("initial amount in bank"));
let withdraw_amount =Number(userInput.question("amount to withdraw"));

let v = cal.withdraw(withdraw_amount, initial_amount);

console.log(v);