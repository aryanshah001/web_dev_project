//LOCAL (BLOCK) SCOPE AND GLOBAL SCOPE.

let a = 5;      //GLOBAL SCOPE.

if (true){
    let a = 10;     //LOCAL SCOPE
    const b = 20;
    console.log('inner:',a);
    
}

// SMALLER (INNER) FUNCTION CAN ACCESS BIGGER (OUTER) FUNCTION BUT OUTER CANT ACCESS INNER one.

function one(){
    const username = 'binod'

    function two(){
        const website = 'youtube'
        console.log(username);
        
    }
    // console.log(website);        //THIS CANT BE ACCESS
    two()
    
}
one()


if (true){
    const username = 'binod'

    if (username == 'binod'){
        const website = 'youtube'
        console.log(username + website);    //THIS CAN BE ACCESS
        
    }
    // console.log(website);        //CANNOT BE ACCESS
    
}
// console.log(username);       //CANNOT BE ACCESS


//CLOSURE MEANS :- IN SHORT :- INNER FUNCTION CAN ACCESS OUTER FUNCTION VARIABLES.


// **********************************INTERESTING**********************************************

// FUNCTION CAN BE MADE IN TWO WAYS .

function addOne(num){
    return num + 1
}
addOne(5)       //WE CAN WRITE ADDONE FIRST THEN DEFINE FUNCTION BUT CANT DO IN EXPRESSION.


 //HOISTING :- DECLARING BEFORE FUNCTION (OR, ON THE TOP)
addOne(5)   //LIKE THIS WE CANT DO IN EXPRESSION.
function addOne(num){
    return num + 1
}


const addTwo = function(num2){   //KNOWN AS EXPRESSION ALSO CAN HOLD JSON VALUE, FUNCTION ETC.
    return num2 + 2
}
addTwo(7)