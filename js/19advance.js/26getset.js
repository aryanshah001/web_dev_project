class User{
    constructor( password , email){
        this.password = password
        this.email = email
    }
    get password(){
        return this._password
    }
    set password(value){
        this._password = value.toUpperCase()
    }

    get email(){
        return `my email is ${this._email}`
    }
    set email(value){
        if (!value.includes('@')) {
            throw new Error('invalid email , not containing @')
        }
        this._email = value
    }

}
try{
const user1 = new User( 'abc' , 'ram123')
console.log(user1.password);
console.log(user1.email);
}catch(error){
    console.log(error.message);
    
}
