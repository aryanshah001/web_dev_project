//call passes current execution context to other.

// old call 
function setUsername(username){
    this.username = username
}

function createUser(username, email , address){
    setUsername.call(this, username)
    this.email = email
    this.address = address
}
const user1 = new createUser('ram', 'ram@example.com', 'delhi' )
console.log(user1);


//**************************************************************************** */
// LATEST CONSTRUCTOR AND CALL. i.e CLASS
class User{
    constructor(username, email ,password){
        this.username = username
        this.email = email
        this.password = password
    }
    encryptPassword(){
        return`${this.password}abc`
    }

    changeUserName(){
        console.log(this.username.toUpperCase());
        
    }
}

const user1 = new User('ram', 'ram@123.com', 123)
// console.log(User.encryptPassword);
User1.changeUserName();


//********************************************************** */
//Inheritence and call(super).. modern syntax.

class User{
    constructor(username){
        this.username = username
    }

    getUserName(){
        console.log(`my name is ${this.username}`);
        
    }
}
class Teacher{
    constructor(username, email , password){
        super(username) //call above username
        this.email = email
        this.password = password
    }

    getUserDetails(){
        return`my name is ${this.username} and email is ${this.email} and pass is ${this.pass}`
    }

    getPass(){
        console.log(`pass = ${this.pass}`);
        
    }

    // static getId(){          // can't access getId.
    //     return'12345'
    // }
}

const data1 = new Teacher('ram' , 'ram@gmail.com' , 18)
console.log(data1);
console.log(data1.getUserDetails());
data1.getPass()
// data1.getId()

const data2 = new User('binod')
console.log(data2);
data2.getUserName()

console.log(data1 instanceof Teacher);
console.log(data1 instanceof User);
console.log(data2 instanceof User);
console.log(data2 instanceof Teacher);
console.log(Teacher instanceof User);



