let mySym = Symbol('Secret_key');
let user1 = {
    name:'binod',
    age:18,
    email:'shaharyan1143@gmail.com',
    'full name': 'Binod-kumar',
    [mySym]: 'key100'
};

user1.greeting = function(){
    // console.log(`hello everyone my name is ${this.name} and my email is ${this.email}`);
    
}
user1.greeting();

// *********************OBJECTS 2 / PART 17 *******************************************




