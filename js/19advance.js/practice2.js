function twoSum(){
    let num = [2,7,11,15]
let target = 9

for (let i = 0; i < num.length; i++) {
    for (let j = i+1; j < num.length; j++) {
        if (num[i] + num[j] === target) {
            console.log(`${num[i]} and ${num[j]} are two number of target`);
         return
            
        }
        
    }
    
}
}
twoSum()