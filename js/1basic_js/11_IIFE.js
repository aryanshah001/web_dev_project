// Immediately Invoked Function Expression.
//ALWAYS WRITE TO IIFE BY ENDING WITH SEMICOLON TO IST ONE.

USECASE:- 
// FOR IMMEDIATE EXECUTION.
// AND TO BE SAFE FROM POLLUTION OF GLOBAL SCOPE.

(   function user1(){           //NAMED IIFE
    console.log('this is user1');  
})
();     //MUST ENTER SEMICOLON.

// ARROW IIFE.

(   ()  => {            // UNNAMED IIFE

    console.log('this is user2');
    
}) 
();


// 3RD EXAMPLE. PARAMETER PASSED IIFE

(   (name) => {
    console.log(`username is ${name}`);
    
}) 
('binod');