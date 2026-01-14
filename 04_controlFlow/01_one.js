// if statement

const isUserLoggedIn = true

// if (condition) { // syntax of if statement
    // body
// }

// if (isUserLoggedIn) {
//     console.log('User logged in'); // condition is true, the code body executed
// }
// console.log('User logged out');  // but this is also executing, so make it under else

// if (isUserLoggedIn) {
//     console.log('User logged in');
// } else {
//     console.log('User logged out');
// }

// nested if else (else if)

// const salary = 10000
// if (salary < 5000) {
//     console.log("Salary is less than 5000"); 
// } else if (salary < 7000) {
//     console.log("Salary is less than 7000");
// } else if (salary < 9000) {
//     console.log("Salary is less than 9000");
// } else {
//     console.log("Salary is less than 12000");
// }

// No need of curly braces when we have one line of code, or two (seperated by comma ,)
// if (true) console.log("hello"), console.log("world"); BAD PRACTISE 



isUserAuthenticated = true
isUserLoggedInFromGoogle = true
isUserLoggedInFromEmail = false

// if (isUserLoggedInFromEmail && isUserAuthenticated) {
//     console.log("Grant Access from Gmail");
// } else {
//     console.log("Access denied");
// }

// if (isUserLoggedInFromGoogle && isUserAuthenticated) {
//     console.log("Access granted");
// }

// if (isUserLoggedInFromEmail || isUserLoggedInFromGoogle) {
//     console.log("Access granted");
    
// }

// if (isUserLoggedInFromEmail || isUserAuthenticated) {
//     console.log("Access granted");
    
// }