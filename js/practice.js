let dobOfBinod =  new Date(2001,3,23);
console.log(
    dobOfBinod.toLocaleString('default',{
        weekday:"long",
        day: "numeric",
        month:"short",
        year:"numeric"
    })
);