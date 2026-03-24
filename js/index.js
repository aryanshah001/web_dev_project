// 4. LET CONST AND VAR.
let accountId = 1234;
let accountpass = 'abc@123';
let accountName = 'Binod';
let isAdmin = true;
let temperature = null
let accountemail;
// console.log(accountName);
// console.log([accountName, accountId, accountpass]);
// console.table([accountName, accountId, accountpass]);

// SYMBOL FOR UNIQUENESS (EXTRA)
const id = Symbol(123);
const anotherId = Symbol(123);
console.log(id===anotherId);    //false

// BigInt FOR VERY LARGE NUMBER
const bigNumber = 5463216548354154635n



// ***************************************************************************************************

// 5. DATA TYPES AND ECMA STANDARD.
"use strict";  //TREAT ALL JS CODE AS NEWER VERSION. BUT NOWADAYS NOT REQ.

//  alert('hello') --- // NOT WORK COZ WE R USING NODE.JS, NOT BROWSER.


// DATA TYPES.
// 1. number => 2 to power 53
// 2. bigint
// 3. string
// 4. boolean
// 5. null  => STANDALONE VALUE . (ITS TYPE IS OBJECT)
// 6. undefined  => VALUE NOT DEFINED. (ITS TYPE IS UNDEFINED)
// 7. symbol  => UNIQUE

console.log(typeof temperature);
console.log(typeof accountemail);
console.log(typeof (accountemail));

// *****************************************************************************************************

// 6. DATA TYPE CONVERSION.

let score = 33;

let valueInNumber = String(score);    //CONVERTED TO STRING.
// let valueInNumber = Number(score);    //TO NUMBER.
console.log(typeof valueInNumber);

// NaN   (CHECK FOR NUMBER)
let accountPerson='33binod';
let accountPersonNum = Number(accountPerson);
console.log(typeof accountPersonNum);  // HERE IT SAYS TYPE=NUMBER BUT binod CANNOT BE NUMBER.
console.log(accountPersonNum);         // AND  ITS VALUE SHOW NaN (NOT A NUMBER).


let a = null;
let aInNumber = Number(a);
console.log(aInNumber);  // GIVES VALUE = 0.


let b='';
console.log(typeof b);  //type = string
console.log(b);         // print nothing(empty)


let c= undefined;
let d=Number(c);
console.log(d);             //NaN       
console.log(typeof d);      //TYPE GET CONVERTED TO NUMBER BUT PRINT NaN


// '33' => 33 
// '33abc' => NaN
// true=1 , false=0







