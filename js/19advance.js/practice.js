const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false;
if (!error) {
    resolve({name:'sita',age:25})
}
else{
    reject('error 303')
}
    }, 1000);
})
promiseFour
.then(function(user){
    // console.log(user);
    return user.name
})
.then(function(username){
    console.log(username);
    // console.log(username.age);
     
})
.catch(function(error){
    console.log(error);
    
})
.finally(function(){
    console.log('the function is either executed or failed');
    
})

