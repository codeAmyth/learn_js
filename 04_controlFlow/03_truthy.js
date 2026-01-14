// falsy values:

// false, 0, -0, BigInt 0n, "", Null, Undefined, NaN

// truthy values: every values other than falsy, some are:

// 'false', " ", {}, [], '0', function(){}

// if ("0") {
//     console.log("since string is not empty, hence it workd as truthy value");
    
// } else {
//     console.log("Not executed");
    
// }

// const emptyArr = [] 
// if (emptyArr.length === 0) {
//     console.log("Array is empty");
    
// }

// const myObj = {}
// if (Object.keys(myObj).length === 0) {
//     console.log("Object is empty");
    
// }

// Nullish Coalescing Operator (??): null undefined
let val1;
val1 = 10 ?? 15
console.log(val1);

val1 = null ?? 15
console.log(val1);

val1 = undefined ?? 10
console.log(val1);

val1 = undefined ?? null
console.log(val1); // null


// terniary operator

//syntax: conditin ? true : false

let isTrue = true

isTrue ? console.log('true') : console.log('false');
