// USING FOR , BREAK AND CONTINUE.

//PRINT 1 TO 10 USING FOR LOOP.
for (let i = 0; i < 11; i++) {
    const element = i;
    console.log(element);  
}

// USING IF/ELSE INSIDE FOR LOOP.
for (let i = 0; i < 11; i++) {
    const element = i;
    if (element==5) {
        console.log('5 is printed');   
    }
    console.log(element);  
}

// LOOP INSIDE LOOP
for (let i = 1; i <=10; i++) {
    const element = i;
    console.log(`Outer loop is ${i}`);
    
    for (let j = 0; j <=3; j++) {
        const element = j;
        console.log(`inner loop value is ${j} and outer loop is ${i}`);   
    }
    
}

// PRINT TABLE FROM 1 TO 10.
for (let i = 1; i <=10; i++) {
    const element = i;
    console.log(`\nTable of ${i}`);
    
    for (let j = 1; j <=10; j++) {
        const element = j;
        console.log(i + '*' + j + '=' + i*j); 
    }   
}

// PRINT ARRAY.
const myArray = ['ram', 'shyam', 'sita']
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
}


// BREAK AND CONTINUE.

//  BREAK . DONT PRINT VALUE MORE THIS.
for (let i = 0; i <=20; i++) {
    if (i ==5 ) {
        console.log('5 Detected');
        break     
    }
    console.log(` value of i is ${i}`);   
}

// CONTINUE . SKIP ONLY ONE ITERATION.
for (let i = 0; i <=20; i++) {
    if (i ==5 ) {
        console.log('5 Detected');
        continue     
    }
    console.log(` value of i is ${i}`);   
}