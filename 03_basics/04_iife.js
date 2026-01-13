// Immeditate Invoked Function Expression (IIFE)
// 1). executed immediately
// 2). Avoid polluting the global scope
// 3). Data privacy (encapsulation)

// declaration :

// (function sayHello() {
//     // named iife
//     console.log("Hello World")
// })();

// (function definition)(function execution)

//using arrow function

// (() => {
//     console.log("JavaScript")
// }) ();

// a ; is used because iife dont know when to stop, so to make it stop we use ;

// parameter passing in iife

((username) => {
    console.log(`Hello ${username}`)
}) ('Mohit')