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


// SIMPLE BASIC METHOD.         //NOT USE
function addNumbers(number1 , number2){
    let output = number1 + number2
    return output
}
const output = addNumbers(5,4)
console.log('result: ' , output);


// BASIC        
function addBothNumber(number3,number4){
    return number3 + number4
}
const addition = addBothNumber(9,1)
console.log('output:', addition);

// SIMPLE  IF/ELSE  STATEMENT

function userLoggedInMsg(username){     //WE CAN DEFINE DEFAULT USERNAME HERE :- (username = 'binod')
if(username===undefined){                   // if(!username) 
    console.log('plz enter username');
    return
    
    }
    
    return `${username} just logged In`;
    }
    console.log(userLoggedInMsg('binod'));
   
//********************* FUNCTION WITH OBJECT AND ARRAY ***********************************


    // ADDING CART PRICES.

function calculateCartPrice(...val){    //HERE KNOWN AS REST OPERATOR  AND SPREAD IN OBJECT
    return(val)
}
console.log(calculateCartPrice(100,200,300));


// OTHER EXAMPLE.
function addCartPrice(val1,val2,...val){
    return{val1,val}
}
console.log(addCartPrice(100,500,1000,800));



// OBJECT IN FUNCTION.

const obj1 = {          //IST CREATE AN OBJECT.
    username:'ram',
    age:19,
    price:399
}

function handleObject(anyObject){
    console.log(`my username is ${anyObject.username} and price is ${anyObject.price}`);
    
}
// handleObject(obj1);      //IST WAY TO ACCESS OBJECT

handleObject({              //2ND WAY TO ACCESS OBJECT
    username:'shyam',
    price:599
})


// HANDLING ARRAY IN FUNCTION.

const myNewArray = [100,200,400,1000];

function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray));     //IST WAY TO ACCESS
console.log(returnSecondValue([199,299,399]));  //2ND WAY TO ACCESS
