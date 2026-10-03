function counter (){
    let count = 0

    function setCounter(){
        return count++

    }
    return setCounter
}
const incre = counter()
console.log(incre());
console.log(incre());
