// codes are wrapped, so that can use multiple times without re-writting
// Examp: print your name 5 times
// Manually:
// console.log("Divyanshu Amit");
// console.log("Divyanshu Amit");
// console.log("Divyanshu Amit");
// console.log("Divyanshu Amit");
// console.log("Divyanshu Amit");

// Functions:
function sayMyName() {
    console.log("Divyanshu Amit");
}
// sayMyName()
// sayMyName()
// sayMyName()

// write a function adding two numbers
// function addTwoNumbers() {
//     num1 = 8
//     num2 = 2
//     console.log(num1 + num2)
// }
// addTwoNumbers();

// parameters and arguments
// function addTwoNumbers(num1 , num2) { // parameters passed in function definition
//     console.log(num1 + num2)
// }
// addTwoNumbers(2,3) // arguments passed during function call

// return statement : returns the output so that it can be stored and 
// its a ending point of any function

function isFacultyLoggedIn(facultyName) {
    if (facultyName === undefined) { // facultyNaem === undefined => !username
        console.log("Faculty name is undefined")
        return
    }
    console.log(facultyName)
    return `Faculty ${facultyName} has logged in`;
    // console.log(facultyName) // unreachable
}
// const result = isFacultyLoggedIn()
// console.log(result);
// we can set default value during function parameter such as
function sayHello(username = "sumit") {
    return `Hello ${username}`
}
// console.log(sayHello())


// multiple parameters at once use: use rest opeators (...)
function getTotalCartPrice(...price) {
    return price
}
//console.log(getTotalCartPrice(190,234,567,345,260)); // returns in array

// Objects passing in functions

const userObj = {
    name : "Rajat",
    age : 19,
    sex : "male",
    isDisabled : false
}

function getUserInfo(user) {
    console.log(user);
    return user.isDisabled
}
console.log(getUserInfo(userObj)); 

// we can pass object directly as well

console.log(getUserInfo({
    name : "Namit",
    age : 23,
    sex : "male",
    isDisabled : true
}))

// passing Arrays into the functions

const myArr = [100, 200, 300, 500]
function printArray(arr) {
    return arr
}
console.log(myArr)

console.log(["sachin", "dhoni", "kohli"])

