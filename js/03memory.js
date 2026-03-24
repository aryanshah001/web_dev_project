// STACK AND HEAP MEMOROY

// STACK.
//  USED IN PRIMITIVE TYPE.
// CHANGES OCCUR IN COPIED VALUE (NOT ORIGINAL).

// HEAP.
// USED IN NON-PRIMITIVE TYPE.
// CHANGES OCCUR IN ORIGINAL VALUE.

// STACK EXAMPLE :- 
let myAccountName = 'binod';
let anotherName = myAccountName;
anotherName = 'ram';

console.log(myAccountName);
console.log(anotherName);


// HEAP EXAMPLE :-

// object
let userone = {
    email:'ram@123.com',
    pass:'abc123',
};

let usertwo = userone;
usertwo.email = 'shyam@456.com';

console.log(usertwo);
console.log(userone);
console.log(userone.email);
console.log(usertwo.email);

// ARRAY
let a=['ram','shyam',12,null];
let b=a;
b[2]='gita';
console.log(a);


