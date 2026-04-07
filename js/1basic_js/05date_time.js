// CHAPTER 6. DATE AND TIME

let myDate = new Date();
// console.log(myDate);

// console.log(myDate.toString());     //MONTH START FROM 0  = JAN
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toTimeString());
// console.log(myDate.getFullYear());   //ONLY YEAR
console.log(myDate.getMonth());         //ONLY MONTH (START FROM ZERO = JAN)
console.log(myDate.getMonth() + 1);      // NOW 1 = JAN  


//CREATE YOUR OWN DATE.
let myCreatedDate = new Date(2023,0,21)
console.log(myCreatedDate.toDateString());


let myOwnDate = new Date('02-22-2001')
console.log(myOwnDate.toLocaleString);


//SHOW IN MILLISECOND (MS).  USED WHILE COMPARING.
let myTimeStamp = Date.now();
console.log(myTimeStamp);

console.log(myOwnDate.getTime()); //CONVERT TO MILLISECOND.
console.log(myOwnDate.getTime()/1000);  //CONVERT TO SECOND.
console.log (Math.floor(myOwnDate.getTime()/1000));   // REMOVE DECIMALL


let dob = new Date(2001,3,23);
    console.log(
    dob.toLocaleString("default", {
        weekday: "long",
        day: "numeric",
        month:"long",
        year: 'numeric'    
})
);



 
