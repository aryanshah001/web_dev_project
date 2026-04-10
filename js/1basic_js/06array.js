const myarr = [1,2,3,4,5];
const myarr2 = ['shaktiman', 'bhim'];
const myarr3 = [0,1,'binod', null,undefined];
const myarr4 = new Array(5,6,7,8);    //DONT USE (NOT RECOMMENDED).

console.log(myarr[2]);   //SHOW VALUE AT INDEX 2 IN myarr.

let a = myarr.indexOf(3);
console.log(a);                 // SHOW INDEX NUMBER OF 3.



//ARRAY METHODS.

myarr.push(8); //    ADD ELEMENT 8 AT LAST POSITION.
console.log(myarr);

myarr.pop();    // REMOVE LAST POSITION ELEMENT.



myarr.unshift(6);       //ADD ELEMENT 6 AT FIRST POSITION.  LESS USE ONLY WHEN REQ.
myarr.shift();          // REMOVE FIRST ELEMENT FROM myarr.


console.log(myarr.includes(5));   //CHECK IF 5 IS PRESENT IN myarr (true/false).

let newarr = myarr.join();      //myarr ASSIGN TO newarr AND DATA TYPES CHANGES TO STRING.
console.log(newarr);
console.log(typeof newarr);

// DIFF IN SLICE AND SPLICE.
or_arr = [1,2,3,4,5];

const myarr6 = or_arr.slice(1,3);       //(start, end) 
console.log(myarr6);
console.log("slice_original: ", or_arr);  //ORIGINAL VALUE REMAIN UNCHANGED.

const myarr7 = or_arr.splice(1,3);         //(start, deletecount , add1, add2....)
console.log(myarr7);
console.log("splice_original: ", or_arr);   //ORIGINAL ARRAY CHANGED.


// ***********************CHAPTER 15 . ARRAY PART 2 ****************************************

//ABOVE WE SAW , WE CAN ADD ELEMENT INSIDE ARRAY WITH PUSH. BUT WHAT IF WE WANT TO ADD ARRAY INSIDE ARRAY.

const superhero = ['shaktiman', 'batman', 'spiderman'];
const villian = ['ompuri', 'amrishpuri', 'dengjongpa'];

// superhero.push(villian);     //PUSH CHANGES ORIGINAL ARRAY SO NO NEED TO DEFINE VARIABLE
// console.log(superhero);  //     LIKE CONST ALLHERO = SUPERHERO.PUSH(VILLIAN)
// console.log(suprhero[3][1]);    //IF WANT TO ACCESS FROM 3RD ELEMENT  (ARRRAY INSIDE ARRAY)


const allhero = superhero.concat(villian);  //BUT CONCAT DOESNOT CHANGE ORIGINAL ONE. SO DEFINE CONST ALLHERO.
// console.log(allhero);


// ONE MORE WAY TO ADD ARRAY INSIDE ARRAY (SPREAD). MOSTLY  USED.

const allHeros = [...superhero , ...villian];
// console.log(allHeros);


// ANOTHER METHOD. FLAT . USED WHEN ARRAY INSIDE ARRAY (NESTED).

manyArray = [1,2,[3,4,5],7,[8,[9,0]]]
console.log(manyArray.flat(Infinity));


myarr1 = ['ram','shyam'];
myarrNum = [1 , 2 , 3,['hari','gita']];
myarrNum2 = [0,4,5];    
myarr3= [4];

result = [myarr1,myarrNum,myarrNum2,myarr3].flat(Infinity);
console.log(result);


// CONVERT TO ARRAY.

console.log(Array.isArray('binod'));   //CHECK IF IT IS ARRAY OR NOT.
console.log(Array.from('binod'));       // CONVERT BINOD TO ARRAY 

console.log(Array.from({name:'ram'}));  //INTERESTING CASE 

// HOW TO MAKE ARRAY.
score1 = 100;
score2 = 200;
score3 = 300;
console.log(Array. of (score1 , score2, score3));






















