// CHAPTER 11

// // STRING CAN BE DECLARED IN TWO WAYS.
// 1. let name = 'binod';
// 2. let name = new String('binod');

// CONCATENATE

const name = 'binod';
let a = 'apple-bc';
const id = 123;
// console.log(name + id + ' value');  //NOT RECOMMENDED.

console.log(`my name is ${name} and my id is ${id}`);  //MODERN RECOMMENDED.


let anotherName = name;
console.log(anotherName.length);


console.log(name[2]);  //PRINT LETTER AT INDEX 2.
console.log(name.length);
console.log(name.charAt(2));
console.log(name.toUpperCase());
console.log(name.toLowerCase());
console.log(name.indexOf('i'));
console.log(name.substring(0,2));   
console.log(name.slice(-4,4));   //HERE -4 = TOTAL LETTER (5) - 4 = (1,4) . COUNTING START FROM INDEX 1 TO 4.
console.log(name.trim);  // ALL SPACE AT START AND END WILL REMOVED.

let url = 'https://hitesh%20choudhary.com'
console.log(url.replace('%20', '_')); // REPLACE IST OCCURING VALUE.
console.log(url.includes('hit'));  //CHECK IF PRESENT THAT VALUE.

let c = 'binod-kumar-gupta';
console.log(c.split('-'));

//CHECK PROTO TYPE IN CONSOLE 
console.log(str.__proto__);


//CHECK PROTO TYPE IN VSCODE
const str = "hello";
console.log(Object.getOwnPropertyNames(Object.getPrototypeOf(str)));



// ******************************NUMBER AND MATHS **********************************************

const score = 400;

// NEW WAY TO DEFINE NUMBER.
const balance = new Number(1002);
console.log(balance);
console.log(balance.toString);  // CONVERT INTO STRING AND NOW U CAN USE ALL PROPERTIES OF STRING ALSO
console.log(balance.toLocaleString());    //ENTER COMMA LIKE 1,00,124
console.log(balance.toLocaleString('en-IN'));    //ENTER COMMA LIKE 1,00,124
console.log(balance.toLocaleString('en-US'));    //ENTER COMMA LIKE 10,000,124
console.log(balance.toFixed(2));    //RETURN 2 POINTS AFTER DECIMAL
console.log(balance.toPrecision(3));   //RETURN ONLY 3 VALUES AND REMOVE ALL (DECIMAL USECASE)



// ***************************************MATHS******************************************************

let z = -5;
console.log(Math.abs(z));      // IST WAY.

console.log(Math);  //OBJECT

console.log(Math.abs(-5));  // NEGATIVE CHANGES TO POSITIVE (SECOND WAY).
console.log(Math.round(4.8));  // ROUND OFF
console.log(Math.ceil(4.2));  // OUPUT = TOP NUMBER.  OUTPUT= 5
console.log(Math.floor(4.8));  // LOWER NUMBER.   OUTPUT = 4
console.log(Math.sqrt(25));  // LOWER NUMBER.   OUTPUT = 4
console.log(Math.pow(5,3));  // 5*5*5 (5 power 3)
console.log(Math.min(8,3,5,4)); //FIND MIN VALUE FROM ARRAY
console.log(Math.max(1,8,3,5)); //FIND MAX VALUE FROM ARRAY

// IMPORTANT.
console.log(Math.random());  //THIS GIVES VALUE BTW 0 AND 1.

// (QUESTION). DICE = 6 RANDOM , CHOOSE 1 TO 10 RANDOM NUMBER.
console.log((Math.random()*10)+1);      //PICKUP RANDOM VALUE FROM 1 TO 10.
console.log(Math.floor(Math.random()*10)+1);

// PICKUP NUMBER BETWEEN 10 AND 20.
min = 10;
max = 20;
console.log(Math.floor(Math.random() * (max - min + 1 ) + min));

// REMEMBER THIS FORMULA : (max-min+1) + min

// PICKUP A NUMBER BTW 50 AND 500.
max = 500;
min = 50;

console.log(Math.floor(Math.random() * (max-min+1) + min));

// STEP TO WRITE THIS .

Math.random()
Math.random() * (max-min+1)
Math.random() * (max-min+1) + min
Math.floor(Math.random() * (max-min+1) + min)
console.log(Math.floor(Math.random() * (max-min+1) + min));




















