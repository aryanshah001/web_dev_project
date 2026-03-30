// *********************CHAPTER:16 OBJECT ****************************************

// OBJECTS CAN BE DECLARED IN 2 WAYS :-
// 1. OBJECT LITERALS.
// 2. CONSTRUCTOR.   (SINGLETON)


// OBJECT LITERALS.

const jsUser = {};      // EMPTY OBJECT.
console.log(jsUser);

const sym1 = Symbol('secret key');
const user1 = {
    name:'binod',
    email:'binod@google.com',
    age:18,
    state:'uttar pradesh',
    isAdmin:true,
    lastLoginDays:['Tuesday','Saturday'],
    'full name': 'binod gupta',
    [sym1]:'key1'
};



console.log(user1); 
console.log(Object.keys(user1));     //IMP
console.log(Object.values(user1));     //IMP
console.log(Object.entries(user1));    // NOT IMP
console.log(user1.hasOwnProperty('name'));   //CHECK , IF EXIST OR NOT 


//TWO WAYS TO ACCESS VALUES.

console.log(user1.name);   //FIRST WAY.

 console.log(user1['name']);   // 2ND AND BEST WAY TO ACCESS OBJECT VALUES.
 console.log(user1['full name']);   //WE CAN ACCESS THIS FULL NAME ONLY BY THIS METHOD.
console.log(user1[sym1]);   //WE HAVE TO DEFINE SYMBOL ABOVE AND INSIDE OBJECT ALSO TO ACCESS IT.

// FIND TYPEOF.
console.log(typeof user1.name);    
console.log(typeof user1['name']);    
console.log(typeof user1['age']);    
 console.log(typeof sym1);         // ACCESSING TYPEOF SYMBOL IS DIFF FROM OTHER.

// CHANGING VALUES OF KEY.  WHEN WE CHANGE ANY VALUE IT GET CHANGE IN REAL OBJ NOT COPIED.
user1.name = 'aaryan_shah';


// WE CAN FREEZE ON OBJECT SO THAT CHANGES DOES NOT OCCUR IN ENTIRE VALUES.
Object.freeze(user1);
user1.age = 20;
console.log(user1.age);

// TO FREEZE PARTICULAR VALUE.
Object.defineProperty(user1,'age',{
    writable:false
});
user1.age = 25;
console.log(user1.age);

// DEFINE FUNCTION INSIDE OBJECT.   
user1.greeting = function(){            //DOES NOT WORK IF U FREEZE.
    console.log('say good bye');
}
console.log(user1.greeting());


// STRING INTERPOLATION (BACKTICKS).
user1.greeting = function(){            //DOES NOT WORK IF U FREEZE.
    console.log(`say good bye to Mr.${this.name}.`);
}
console.log(user1.greeting());          //THESE FUNCTION RETURN UNDEFINED ALSO.

// TO PRINT OUTPUT ONLY (WITHOUT UNDEFINED).TWO WAYS :-

user1.greeting=function(){              // IST WAY
    return `hii everyone , I am ${this.name}`
};
console.log(user1.greeting);


// 2ND WAY :-
user1.greeting = function(){
    console.log(`hello everyone, I am ${this.name}`);   
}
user1.greeting();       //JUST CALL THE FUNCTION.


// *********************OBJECTS 2 / PART 17 *******************************************

// THIS IS ALSO OBJECT LITERALS. IST CREATE EMPTY THEN ASSIGN VALUE. 

const tinderUser = {}
tinderUser.id = '1234'
tinderUser.name = 'defronix'
tinderUser.email = 'hello@defronix.com'

console.log(tinderUser);

// IMPORTANT.
console.log(Object.keys(tinderUser));  //SHOWS ONLY KEYS IN ARRAY FORM.
console.log(Object.values(tinderUser));



// NESTING OF LITERAL OBJECTS.
const User2 = {
    username:{
        fullname:{
            first_name:'binod',
            last_name:'gupta',
        }
    },
    email:'hellodef@123.com',
    age:19

}
console.log(User2.username.fullname?.first_name); //ACCESSING NESTED OBJECTS. ? PROTECT IF FULLNAME DOESNOT EXIST.
console.log(User2['email']);


// MERGING OBJECTS.

const obj1 = {1:'ram' , 2:'shyam'};
const obj2 = {3:'sita' , 4:'gita'};

const obj3 = {...obj1, ...obj2};        //SPREAD MOSTLY USED.
console.log(obj3);

const obj4 = Object.assign({},obj1,obj2);    //LESS USED.
console.log(obj4);


// ******************* OBJECT 3 / CHAPTER 18 ************************************************

// DE-STRUCTURE OF OBJECTS.

const course = {
    course_name : 'js',
    price : '999',
    course_instructor : 'hitesh sir'
};

const{course_instructor : instructor} = course;  //MAKING SHORT TO ACCESS.
console.log(instructor);



