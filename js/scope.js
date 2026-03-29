//LOCAL AND GLOBAL SCOPE.

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
