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

function AddNumber(){
    const result1 = AddTwo(5,1)
    const result2 = Power5(5)

    return(
        <>
            <h1>{result1}</h1>
            <h1>{result2}</h1>
        </>
    )
    
}
export default AddNumber