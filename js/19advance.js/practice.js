function outer(){
    let username = 'ram'
}
    function inner(){
        console.log(username);
        
    
    return inner
    }
const user = outer()
user()