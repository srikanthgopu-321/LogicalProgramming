let userInput = require("readline-sync");
let str = userInput.question("enter the string");

function stringConter(string) {
        let upper = 0, lower = 0;  
        let number = 0, special = 0; 
  
        for(let i = 0; i < str.length; i++) 
        { 
            let ch = str[i]; 
            if (ch >= 'A' && ch <= 'Z') 
                upper++; 
            else if (ch >= 'a' && ch <= 'z') 
                lower++; 
            else if (ch >= '0' && ch <= '9') 
                number++; 
            else
                special++; 
        } 

        console.log("Upper case letters : " + upper); 
        console.log("Lower case letters : " + lower); 
        console.log("Number : " + number); 
        console.log("Special characters : " + special); 

    }

stringConter(str);
    
