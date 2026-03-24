// 7. OPERATION

let value = 3;
let negValue = -value;
console.log(negValue);     // output = -3


let hello = 'abc';
let negativeValue = -hello;
console.log(negativeValue);      //output = NaN


console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(5/2);     //OUTPUT = 2.5
console.log(5%2);  // REMAINDER = 1

// FLOOR AND TRUNC REMOVES DECIMAL NUMBER . GIVES SAME RESULT FOR POSITIVE NUMBER BUT IT GIVES DIFF RESULT IN NEGATIVE NUMBER. 
// TRUNC REMOVES DECIMAL PART COMPLETELY .
//FLOOR TAKES LOWER VALUES LIKE IF RESULT IS -2.8 THEN OUTPUT BECOMES -3 (WHICH IS LOWER THAN -2.8) 
console.log(Math.floor(5/2));  // REMAINDER = 1
console.log(Math.trunc(5/2));  // REMAINDER = 1


let str1 = 'hello';
let str2 = ' binod';
str3 = str1 + str2;
console.log(str3);  //CONCATENATE


console.log('1' + '2');
console.log('1' + 2);
console.log(1 + '2');   //THESE GIVE 12 RESULT (CONCATENATE)

console.log('1' + 2 + 3);   //OUTPUT = 123
console.log(1 + '2' + 3);   //OUTPUT = 123
console.log(1 + 2 + '3');   //OUTPUT = 33  (RULE/GUIDELINE OF JS)

// POSTFIX
let score = 100;
score++;
console.log(score);   //OUTPUT = 101

// PREFIX
let apple = 100;
++apple;
console.log(apple);   //OUTPUT = 101

// *********************************************************************************************

// 8. COMPARISON OF DATA TYPES.

//IF DATA TYPE ON BOTH SIDE IS SAME THEN NO PROBLEM.
console.log(2>1);
console.log(2>=1);
console.log(2<1);
console.log(2==1);
console.log(2===1);
console.log(2!=1);

//IF DATA TYPE IS DIFF THEN PRBLM ARISE.
console.log('2' > 1);  
console.log('02' > 1);  // IN THESE CASE STRING AUTO GET CONVERTED TO NUMBER.

console.log(null > 0);  //false
console.log(null = 1);  //false
console.log(null >= 1); //true

// STRICT CHECK (CHECK DATA TYPES ALSO)
console.log('1' === 1);   //FALSE
console.log(1 === 1);     //TRUE

// ************************************************************************************************

// SUMMARY ON DATA TYPES.

// TWO TYPES OF DATA TYPES BASED ON STORAGE IN MEMORY
// 1.PRIMITIVE DATA TYPES
// 2.NON-PRIMITIVE DATA TYPES (REFERENCE DATA TYPES)

// 1. PRIMITIVE DATA TYPES
// 1. Number       2. String       3.Boolean
// 4. null         5. undefined       6. Symbol        7.BigInt


// 2. NON-PRIMITIVE TYPE (REFERENCE TYPE)
// 1. Array        2. Object       3.function


const myArray = ['ram', 'shyam' , 'apple'];

let myObj = {
    name:'binod',
    age:18,
}

// together Array + Object 
let users = [
    {name:ram , age:18},       
    {name:shyam , age:22}    
];

// Function
const myFunction = function(){
    console.log('hello world');  
};





