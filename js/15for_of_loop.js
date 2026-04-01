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
