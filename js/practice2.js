const myObj = {
    name:'ram',
    age:18,
    price:999     
    }
myObj.greeting = function(){
    console.log(`i am ${this.name}`);
    
}
myObj.greeting()
