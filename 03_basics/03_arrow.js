// this refers to current context

const user = {
    username : "Rajan",
    price : 499,
    payment : true,

    greetings : function() {
        console.log(`${this.username} , welcome to the course. Lets Build Together`);
        //console.log(this); // check output
        
    }
}

// user.greetings()
// user.username = "Manish"
// user.greetings()

//console.log(this) // empty object because nothing in current context
// what if this used in a function(any how it is declared)
const checkThis = function() {
    let username = "ankit"
    console.log(this.username) // undefined
}
// checkThis();

// ***************************** ARROW FUNCTIONS **********************************

// ther are several ways of declaring an arrow functions


// const sayHello = () => {
//     return 'Hello world'
// }

// console.log(sayHello())

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// console.log(addTwo(4,6))

// if function has only one line of code

// const addTwo = (num1, num2) => num1+num2;
// console.log(addTwo(4,6))

// to make it more structures, we can use ()

const addTwo = (num1, num2) => (num1+num2);
console.log(addTwo(4,6))

// returning an object

const userInfo = () => ({username : "Ankit"})
console.log(userInfo())