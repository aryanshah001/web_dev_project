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


