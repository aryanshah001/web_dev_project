async function getData() {
try{
    const res = await fetch('https://ranodmuser.me/api')
    const data = await res.json()

    console.log(res);
    console.log(data);
    
}
catch(error)  {
    console.log(error);
    
}
}
getData()