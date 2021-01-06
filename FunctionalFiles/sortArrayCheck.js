var cal = require("../UtilityFiles/utility");
var userInput = require('readline-sync');

    let len = userInput.question("enter lenght of array\n");

    let arr1 = [];

    for(let i = 0; i < len; i++) {
        arr1[i] = userInput.question();
    }
    console.log(checkList(arr1));

    function checkList(arr) {
        for (var i = 0; i < arr.length; i++) {
            if (arr[i + 1]) {
                if (arr[i] > arr[i + 1]) {
                    console.log("no");
                }
            }

        }
        console.log("yes");
    }