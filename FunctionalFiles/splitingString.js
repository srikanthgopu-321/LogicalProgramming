 
 
 var userInput = require('readline-sync');
 
 var sampleString = userInput.question("enter any string\n");

function splitting(sampleString) {
var _num = "";
var _alp = "";

for (var i = 0; i < sampleString.length; i++) {
  if (Number(sampleString[i])) {
    _num += sampleString[i];
  } else {
    _alp += sampleString[i];
  }
}
console.log(_num, _alp);
}

splitting(sampleString);