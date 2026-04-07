//THIS ONLY WORKS WITH OBJECT FUNCTION NOT ALONE WITH FUNCTION.
const user1 = {
    username:'ram',
    price:999,
    welcomeMsg:function(){
        return (`username is ${this.username}`)
    }
}

console.log(user1.welcomeMsg());    //HERE IT WORKS


//HERE, THIS WILL NOT WORK COZ NO OBJECT. 
function a(){
    let username = 'binod'
    console.log(this.username);

}
a();

const username = function(){        // HERE ALSO, THIS WILL NOT WORK
    let name = 'binod'
    console.log(this.name);
    
}
username()


//ARROW FUNCTION.
const username2 = () => {       
    let name = 'binod'
    console.log(this.name);
}


const addTwo = (num1,num2) => num1 + num2       //IMPLICIT RETURN = RETURNING A VALUE WITHOUT USING RETURN KEYWORD
console.log(addTwo(5,4));


const addTwoNum = (num1,num2) => (num1 + num2)
console.log(addTwoNum(5,4));


const addBoth = (num1,num2) => {        //MUST USE RETURN WHILE USING CURLY BRACES
    return num1 + num2

}
console.log(addBoth(1,5));


// FOR Object.

const addUser = (user1) => ({username:'binod'})  //MUST ENCLOSE INSIDE PARANTHESE TO RETURN OBJECT VALUE.
console.log(user1.username);

