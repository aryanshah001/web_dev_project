
class User{
    constructor(username){
        this.username = username
    }

    getUserName(){
        console.log(`my name is ${this.username}`);
        
    }
}
class Teacher extends User{
    constructor(username, email , password){
        super(username) //call above username
        this.email = email
        this.password = password
    }

    getUserDetails(){
        return`my name is ${this.username} and email is ${this.email} and pass is ${this.password}`
    }

    getPass(){
        console.log(`pass = ${this.password}`);
        
    }
}

const data1 = new Teacher('ram' , 'ram@gmail.com' , 18)
data1.getUserName()


const data2 = new User('binod')
data2.getUserName()
