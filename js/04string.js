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
console.log(name.indexOf('i'));
console.log(name.substring(0,2));   
console.log(name.slice(-4,4));   //HERE -4 = TOTAL LETTER (5) - 4 = (1,4) . COUNTING START FROM INDEX 1 TO 4.
console.log(name.trim);  // ALL SPACE AT START AND END WILL REMOVED.

let url = 'https://hitesh%20choudhary.com'
console.log(url.replace('%20', '_')); // REPLACE IST OCCURING VALUE.
console.log(url.includes('hit'));  //CHECK IF PRESENT THAT VALUE.

let c = 'binod-kumar-gupta';
console.log(c.split('-'));












