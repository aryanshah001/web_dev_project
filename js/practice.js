function isLoggedInUser(username){
    if (username === undefined){
        console.log('plz define name ist');
        return
        
    }
    return `${username} is logged in`
}
console.log(isLoggedInUser('binod'));
