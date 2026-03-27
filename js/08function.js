// ************************************CHAPTER-19 / FUNCTION ******************************************************

const { use } = require("react");

myName = function(){
    console.log('b');
    console.log('i');
    console.log('n');
    console.log('o');
    console.log('d');
    
}
// CALL THE FUNCTION.
// myName()    // HERE myName = REFERENCE AND () IS EXECUTION. 


//SIMPLE BASIC METHOD.
function addTwoNumbers(number1, number2){       //PARAMETERS  
    console.log(number1 + number2);
    
}
addTwoNumbers(4,108);           //ARGUMENTS
addTwoNumbers(4,'8');           
addTwoNumbers(4, null);          

const result = addTwoNumbers(4, null);
// console.log(result);    // WHEN WE CHECK REUSLT IT SAYS UNDEFINED COZ WE HAVE TO RETURN VALUE.


// SIMPLE BASIC METHOD.
function addNumbers(number1 , number2){
    let output = number1 + number2
    return output
}
const output = addNumbers(5,4)
// console.log('result: ' , output);


// BASIC
function addBothNumber(number3,number4){
    return number3 + number4
}
const addition = addBothNumber(9,1)
// console.log('output:', addition);

// SIMPLE  IF/ELSE  STATEMENT

function userLoggedInMsg(username){     //WE CAN DEFINE DEFAULT USERNAME HERE :- (username = 'binod')
if(username===undefined){                   // if(!username) 
    console.log('plz enter username');
    return
    
    }
    
    return `${username} just logged In`;
    }
    console.log(userLoggedInMsg('binod'));
   

    // PROFESSIONAL


    
    


