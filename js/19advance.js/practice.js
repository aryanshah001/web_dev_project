const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;
        if (!error) {
            resolve({name:'Ram', state:'Bangalore'})
        }
        else{
            reject('ERROR: sth went wrong')
        }
        
    }, 1000)
})
promiseFour.then(function(user){
    console.log(username);
    return user.username
    
}).catch(function(err){
    console.log(err);
    
})