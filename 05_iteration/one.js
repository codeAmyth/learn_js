// for loop

// for (let i = 0; i < array.length; i++) {
//     // loop body
    
// }

for (let i = 0; i <= 10; i++) {  
    const element = i;
    if (element === 5) {
        console.log(`${element} is best number.`)
     }
    // console.log(element)
}

// nested loops

// for (let i = 0; i <= 10; i++) {
//     console.log(`Outer loop: ${i} is running`)
//     for (let j = 0; j <= 10; j++) {
//         console.log(`Inner loop: ${j} is running`)
//     }
// }

// tables from 1 to 20
// for (let i = 1; i < 11; i++) {
//     console.log(`Table of ${i}`);
//     for (let j = 1; j < 11; j++) {
//         console.log(`${i} * ${j} = `+ i*j);
//     }
    
// }

// break

for (let index = 0; index < 10; index++) {
    
    if (index == 5) {
        console.log("5 is detected");
        break;
    }
    console.log(index)
}
    
for (let index = 0; index < 10; index++) {
    
    if (index == 5) {
        console.log("5 is detected");
        continue;
    }
    console.log(index)
}
