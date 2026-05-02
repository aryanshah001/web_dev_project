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
}

const user1 = new User('ram', 'ram@123.com', 123)
console.log(User.encryptPassword);

