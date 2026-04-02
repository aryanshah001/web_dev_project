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
let priceToPay = shoppingCart.reduce((acc,i) => acc + i.price , 0)
console.log(priceToPay);
