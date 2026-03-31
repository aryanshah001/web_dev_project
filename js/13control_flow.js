// CONTROL FLOW OR (LOGIC FLOW).
// WE COVER -> IF/ELSE , SWITCH CASE

// IF STATEMENT.

//IST EXAMPLE .
const temp = 41
if (temp <50 ){
    console.log('temperature is less than 50.');

} else
{
    console.log('temperature is more than 50.');
    
}
console.log('execute everytime coz outside if/else');

//2ND EXAMPLE.
const score = 200
if (score >100 ){
    const power = 'fly'
    console.log(`power = ${power}`);
    
}
//  console.log(`power = ${power}`);    //THIS WONT GET PRINTED DUE TO LOCAL SCOPE.


//THIS WORK BUT DONT USE. (NOT READABILITY)
const balance = 1000
if (balance > 500) console.log('more than 500'), ('plz check balance');


//ELSE IF STATEMENT.
// NOTE :- While using > greator than symbol for comparison always check from large value to small value as below.
//         and while using < less than symbol always check from lesser value to greator value.
const price = 1100
if (price > 1000) {
    console.log('price is greater than 1000');   
} 
else if (price > 500) {
    console.log('price is greater than 500');  
}
else if (price > 750) {
    console.log('price is greater than 750');
}
else {
    'price is above 100'
}


const std = 500
if (std < 50) {
    console.log('students are less than 50');
}
else if (std < 200) {
    console.log('student are less than 200');   
}
else if (std < 400) {
    console.log('student are less than 400');   
}
else{
    console.log('student are less than 600');
    
}


// CHECK MULTIPLE CONDITION.
const isLoggdIn = true
const debitcard = false
const loggedInFromGoogle = true
const loggedInFromEmail = true

if (isLoggdIn && debitcard && 2==3 ) {           // WORK IF ALL TRUE.  AND OPERATOR
    console.log('you can buy course'); 
}

if (loggedInFromGoogle || loggedInFromEmail) {      // WORK IF BOTH OR ONE TRUE. OR OPERATOR
    console.log('logged in');
    
}


// ***************************** SWITCH CASE *******************************************

const month = 3
switch (month) {
    case 1:
        console.log('jan');
        break;
    case 2:
        console.log('feb');
        break;
    case 3:
        console.log('march');
        break;
    case 4:
        console.log('april');
        break;
    case 5:
        console.log('may');
        break;
    
    default:
        console.log("default");
        break;
}
