const user = function(username , standard , percentage){
    this.username = username
    this.standard = standard
    this.percentage = percentage
}

const student1 = new user ('binod', 8 , 78)
const student2 = new user ('ram', 10 , 76)
const student3 = new user ('shyam', 6 , 94)

console.log(student1);
console.log(student2);
console.log(student3);
