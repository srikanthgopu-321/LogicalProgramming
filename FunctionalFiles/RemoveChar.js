var userInput = require('readline-sync');

let phrase = userInput.question("enter a string\n");


function removeChracter(s) {
   
    let reg = /\d+/g;

    let result = s.match(reg);

    return result;
}
let n = removeChracter(phrase);

console.log(n);