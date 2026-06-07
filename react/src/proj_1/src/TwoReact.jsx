function AddTwo(num1, num2){
    return(
        num1 + num2
    )
}

function Power5(pow){
    return(
        pow*pow
    )
}

function  Result(){
    let num1 = 5
    let num2 = 1
    let pow = 5
    const result1 = AddTwo(num1, num2)
    const result2 = Power5(pow)

    return(
        <>
            <h3>Addition of {num1} and {num2} = {result1}</h3>
            <h3>power of {pow} = {result2}</h3>
        </>
    )
    
}
export default Result