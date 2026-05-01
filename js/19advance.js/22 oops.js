//CONSTRUCTOR 

const User = function(username , standard , percentage){
    this.username = username
    this.standard = standard
    this.percentage = percentage
}

const student1 = new user ('binod', 8 , 78)
const student2 = new user ('ram', 10 , 76)
const student3 = new user ('shyam', 6 , 94)

console.log(student1);
console.log(student2);
console.log(student3);

// **************** PROTO-TYPE ****************************

//1. ONLY createUser CAN USE THIS PROTO. 
function createUser(username , score){
    this.username = username
    this.score = score
}

const user1 = new createUser('aryan' , 25) 
const user2 = new createUser('ram' , 50)

console.log(user1);
console.log(user2);

createUser.prototype.printScore = function(){
    return `score is ${this.score}`
}
console.log(user1.printScore());

createUser.prototype.increment = function(){
    this.score ++
    return `this.score`
}
console.log(user1.increment());


// other example.
const user = 'binod    '

String.prototype.truelength = function(){
    return `${this.trim().length}`
}
console.log(user.truelength());


// 2. ANY FUNCTION CAN USE THIS PROTO.
let myHeros = ['superman', 'spiderman']
console.log(myHeros);


let heroPower = {
    thor:'hammer',
    spiderman:'sling',
    getSpiderPower:function(){
        console.log(`spidy power is ${this.spiderman}`);
        
    }
}

Object.prototype.hitesh = function(){
    console.log('hitesh is present in all objects');
     
}
heroPower.hitesh()
myHeros.hitesh()


//Inheritence.

const teacher = {
    makeVideo:true
}

const teachingSupport = {
    isAvailable:false
}

const TASupport = {
    makeAssignment : 'js assignment',
    fullTime : true
}

Object.setPrototypeOf(teachingSupport , teacher) // teachingSupport get all properties of teacher.
