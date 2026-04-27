//use async/await
async function getUser() {
    try {
        const response = await fetch('https://randomuser.me/api/');
        const data = await response.json();

        console.log(response); // full response
        console.log(data);     // actual API data
    } catch (error) {
        console.log(error);
    }
}

getUser();

// get response and data both.
fetch('https://randomuser.me/api/')
.then(response => {
    return response.json().then(data => {
        return { response, data }; // pass both
    });
})
.then(({ response, data }) => {
    console.log(response); // ✅ now works
    console.log(data);
})
.catch(error => {
    console.log(error);
});