//FOR EACH DOESNT RETURN VALUE WHEN WE STORE IN A VARIABLE AS BELOW.
//FOR THAT WE SHOULD USE FILTER.


// MAP CHANGES EVERY ELEMENT.
// FILTER SELECT SOME ELEMENT.

const myArray = ['ram','shyam','hari']

const result = myArray.forEach((i) => {
    console.log(i);   
    return
});

console.log(result);    //IT WILL ALSO PRINT UNDEFINED SO WE USE FILTER.
 
// **************** FILTER *******************************

// FILTER SELECT SOME ELEMENT. (USED TO FILTER OUT SOME ELEMENT)

const myArr = [1,2,3,4,5,6,7]
const result1 = myArr.filter( (i) => {    //HERE IF U USE CURLY BRACES THEN WRITE RETURN.
    return i > 3
} ) 
console.log(result1);

// const myArr = [1,2,3,4,5,6,7]
// const result1 = myArr.filter( (i) => i > 3 )     //NO NEED TO WRITE RETURN IF U DIDNT USE CURLY BRACES.
// console.log(result1);

//REAL WORLD.
const books =[
    {title:'Book one' , genre: 'science' , publish: 1987 , edition: 1999},
    {title:'Book two' , genre: 'history' , publish: 1947 , edition: 1949},
    {title:'Book three' , genre: 'non-fiction' , publish: 1990 , edition: 2000},
    {title:'Book four' , genre: 'history' , publish: 2001 , edition: 2005},
    {title:'Book five' , genre: 'science' , publish: 1967 , edition: 1970},
    {title:'Book six' , genre: 'geography' , publish: 2005 , edition: 2010},
];

//FILTER HISTORY BOOKS ONLY.
let userBooks1 = books.filter(  (i) => i.genre === "history" )
console.log(userBooks1);

//FILTER BOOKS THAT PUBLISHED YRS AFTER 2000.
let userBooks2 = books.filter(  (i) => i.publish >=2000 )
console.log(userBooks2);

// USE RETURN IF U HAD USED CURLY BRACES/SCOPE.
let userBooks3 = books.filter(  (i) => { return i.publish >=2000 } )
console.log(userBooks3);

//USING 2 CONDITION.
let userBooks4 = books.filter(  (i) => {
    return i.publish > 1950 && i.genre == "history"
}  )
console.log(userBooks4);


// *************************** MAP ****************************************

// MAP CHANGES EVERY ELEMENT.
//ADD 10 IN ALL DIGIT IN ARRAY USING MAP.
const num = [1,2,3,4,5,6,7]
let newNum = num.map ( (i) => i + 10  )
console.log(newNum);


// ************************ CHAINING **********************************

const nums = [1,2,3,4,5,6,7]
let myNum = nums
            .map((i) => i * 10 )
            .map((i) => i + 1 )
            .filter((i) => i >= 40 )

console.log(myNum);


// ************************ REDUCE *************************************
//ACC = ACCUMULATOR  AND CURRVAL = CURRENT VALUE.

const num2 = [1,2,3]
let total = num2.reduce((acc , currval) => acc + currval , 0)
console.log(total);

//ADD SHOPPING_CART PRICE.
const shoppingCart = [
    {
        courseName:'js course',
        price:2999
    },
    {
        courseName:'py course',
        price:999
    },
    {
        courseName:'mobile dev course',
        price:5999
    },
]
let priceToPay = shoppingCart.reduce((acc,i) => acc + i.item , 0)
console.log(priceToPay);




