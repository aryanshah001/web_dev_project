const user = function(username , age , city){
    this.username = username
    this.age = age
    this.city = city
    this.parent_name = function(father , mother){
        this.father_name = father
        this.mother_name = mother
       
    }
    
}

const user1 = new user  ("binod" , 14 , "gkp")
const user2 = new user  ("shyam" , 18 , "gkp")
user1.parent_name('papa', 'mama')
console.log(user1);
console.log(user2);

