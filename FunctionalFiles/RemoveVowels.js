
var userInput = require('readline-sync');
let str1 = userInput.question("enter a string\n");
function removeVowels(str) {
    return str.replace(/[aeiou]/gi, '');
  }

 console.log(removeVowels(str1));