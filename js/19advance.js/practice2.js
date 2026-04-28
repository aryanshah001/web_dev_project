async function getData () {
    try{
        const [res1, res2] = await Promise.all([
            fetch('https://randomuser.me/api'),
            fetch('https://randomuser.me/api?results=2')
        ]);

        if (!res1.ok || !res2.ok) {
            throw new Error('sth went wrong')
        }
        const [data1, data2] = await Promise.all([
            res1.json(),
            res2.json()
        
        ]);
        // console.log(data1.results[0].email);

        const user1 = data1.results[0]
        const user2 = data2.results[2]
        const {name:name1,login:login1,email:email1} = user1
        // const {name:name2,login:login2,email:email2} = user2

        console.log(name1.first);
        console.log(login1.password);
        // console.log(name2.last);
        // console.log(login2.password);
        

        
    }
    catch(error){
        console.log(error.message);
        
    }
}
getData()