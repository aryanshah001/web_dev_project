// INTERVIEW
// CAN WE CHANGE VALUE OF MATH.PI FROM 3.14 TO OTHER VALUE.

const math = Object.create(Math)

Object.defineProperty(math,'PI',{
    value : 10,
    // writable:true
})
console.log(math.PI);

console.log(Object.getOwnPropertyDescriptor(math, 'PI'));

