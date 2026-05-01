async function getData() {
    try{
        const res = await fetch('https://randomuser.me/ap')
        if (!res.ok) {
            throw new Error ('network error');
            
        }

        const data = await res.json()
        const user = data.results[0]

        console.log(user.name.first);
        
    }
    catch(error){
        console.log(error.message);
        
    }
}
getData()

///////////////////

// async function getData() {
//     try{
//         const res = await fetch('https://randomuser.me/api')

//         const data = await res.json()
//         const user = data.results[0]

//         console.log(user.name.first);
        
//     }
//     catch(error){
//         console.log(error.message);
        
//     }
// }
// getData()