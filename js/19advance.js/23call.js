//call passes current execution context to other.

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
