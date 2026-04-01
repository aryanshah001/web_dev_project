const myObj = {
    js:'java script',
    cpp:'c++',
    hw:'hello world'
}

// PRINT ONLY KEYS.
for (const key in myObj) {
   console.log(key);
   
}

// PRINT ONLY VALUES.
for (const key in myObj) {
   console.log(myObj[key]);
   
}

// PRINT BOTH KEY AND VALUES
for (const key in myObj) {
   console.log(` ${key} is shortcut of ${myObj[key]}`);
   
}

