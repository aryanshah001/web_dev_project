//FOR OF LOOP.

// [ "" , "" , "" ]
// [ {}, {}, {} ]

//PRINT ARRAY USING for_of LOOP.
let myArray = [1,2,3,4,5]

for (const i of myArray) {
    console.log(i);    
}

// PRINT STRING USING FOR_OF LOOP.
const greeting = "Hello World!"

for (const i of greeting) {
    console.log(i);
    
}

// USING CONTINUE.
const greeting = 'hello world'
for (const i of greeting) {
    if (i===" ") {
        continue;
    }
    console.log(`Each char is ${i}`);
    
}


// *************** MAP *************************

// CAN PRINT USING FOR_OF LOOP . (FOR_IN LOOP NOT WORK IN MAP)
const map = new Map()
map.set('in', 'India')
map.set('ch','china')
map.set('fr','france')
console.log(map);

for (const [key,value] of map) {
    console.log(key);        // PRINT ONLY KEY
    console.log(value);      //PRINT ONLY VALUE
    console.log(key,':',value);      //PRINT BOTH KEY AND VALUE
    
}

//OBJECT.
// WE CANT APPLY FOR_OF LOOP IN OBJECT.  
// FOR_IN LOOP IS APPLIED IN OBJECT.
// FOR_EACH LOOP IS MOST COMMONLY USED IN ARRAY.
// FOR_OF IS ALSO APPLIED IN ARRAY. WE CAN DO WITH FOR_IN ALSO BUT NOT RECOMMENDED.

//USING FOR_IN LOOP IN OBJECT TO PRINT KEYS AND VALUES.
const myObj = {
    js:'java script',
    cpp:'c++',
    hw:'hello world'
}

for (const key in myObj) {      // PRINT ONLY KEYS.
   console.log(key);
   
}

for (const key in myObj) {      // PRINT ONLY VALUES.
   console.log(myObj[key]);
   
}

for (const key in myObj) {      // PRINT BOTH KEY AND VALUES
   console.log(` ${key} is shortcut of ${myObj[key]}`);
   
}

// USING FOR_IN LOOP IN ARRAYS TO PRINT VALUES. (NOT RECOMMENDED)
const myArr = ['ram','shyam']
for (const key in myArray) {
    console.log(myArray[key]);  
}

//USING FOR_OF LOOP TO PRINT ARRAYS . (LESS COMMON)
const arr = ['ram','sit']
for (const i of arr) {
    console.log(i);   
}

//USING FOR_EACH LOOP TO PRINT ARRAY. (MOST COMMON AND RECOMMENDED)
const coding = ['js', 'c++' , 'python', 'ruby']

coding.forEach(  function (i){
    console.log(i);
    
}   )

//PRINT USING ARROW FUNCTION IN FOR_EACH LOOP.
const coding = ['js', 'python']
coding.forEach(  (i) => {
    console.log(i);
    
}   )


//CAN PRINT DECLARING FUNCTION ALSO.(LESS USED)
const coding = ['ram', 'shyam']
function printMe(i){
    console.log(i);  
}
coding.forEach(printMe)


// MORE ABOUT FOR_EACH.
const fruit = ['apple','mango','banana']
fruit.forEach(  (i , index, array) => {
    console.log(i , index , array);
    
} )


// MORE OBJECT INSIDE ARRAY [{}, {}, {}]

const myCoding = [
    {
        languageName:'javascript',
        languageFile:'js'
    },
    
    {
        languageName:'python',
        languageFile:'py'
    },
    {
        languageName:'java',
        languageFile:'java'
    },

]

//print in  diff ways (ist)
myCoding.forEach(    (i) => {
    console.log(i.languageName);
    console.log(i.languageFile);
    console.log(); 
}   )

//print in  diff ways (2nd)
myCoding.forEach(  (i) => {
    console.log(i.languageName);  
}  )
console.log();
myCoding.forEach(  (i) => {
    console.log(i.languageFile);
    
}  )


