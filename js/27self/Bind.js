// Using this and without Arrow function.
const username = {
    name:'binod'
}
const greet = function(){
    console.log('hello',this.name);
    
}
const newGreet = greet.bind(username)

newGreet()


// using ArrowFunction.

const user = {
    name:'ram',

    greet(){            // here greet is a method . 
        const sayHello = () => {
            console.log('hello',this.name);
            
        }
        sayHello()
    }
}
user.greet()


//Closure :- is when a function reme mber its variables even after outer function is finished executing.