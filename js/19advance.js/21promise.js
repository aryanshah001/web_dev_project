// IST WAY :- store in variable(promisOne).

// const promiseOne = new Promise(function(resolve, reject){
// //Do an async task.
// //DB calls, cryptography , network.

// setTimeout(function(){
//     console.log('async task is completed');
//     resolve()
// }, 1000);
// })

// promiseOne.then(function(){
//     console.log('promise consumed');
    
// })


// 2ND WAY (without storing inside variable)
// new Promise(function(resolve, reject){
// setTimeout(function(){
//     console.log('async task2 is completed');
//     resolve()
// }, 1000);
// }).then(function(){
//     console.log('promise2 consumed');
    
// })

// Third.
// const promisThree = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         resolve({username:'binod', age:25 , email:'hello@def.com'})
//     })
// }).then(function(user){
//     console.log(user);
//     console.log(user.username);
//     console.log(user.username , user.age);
//     console.log(`${user.username} , ${user.age}`);
  
// })

//four.
const promiseFour = new Promise(function(resolve , reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({name:'Binod',age:25})
        }
        else{
            reject('Error:sth went wrong')
        }
    } ,1000)
})
promiseFour
    .then(function(user){
        return(user.name);
        
    })
    .then(function(username){
        console.log(username);
        
    })
    .catch(function(error){
        console.log(error);
        
    })
    .finally(function(){
        console.log('the promise is either resolved or rejected');
        
    })
    

    // same as fourth but when we call more than one Object.
    promiseFour
    .then(function(user){
        return user
    })
    .then(function({name,age}){
        console.log(name);
        console.log(age);
        
    })

    //five

    const promiseFive = new Promise(function(resolve, reject){
        setTimeout(() => {
            
        }, 1000);
    })


