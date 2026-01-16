// for of loop

// for (const element of object) {  // objects can be anything from array to string or real objects
    // loop body
// }

// const numbers = [1,2,3,4,5,6]
// for (const nums of numbers) {
//     console.log(nums);
    
// }

// let greetings = "Hello World"
// for (const greet of greetings) {
//     console.log(greet);
// }

// Maps : ordered, unique key value pairs, itterateable

let map = new Map();
map.set('IND' , 'India')
map.set('AUS' , 'Australia')
map.set('ENG' , 'England')

// for (const mpp of map) {
//     console.log(mpp);
    
// }

// for (const [key, value] of map) {
//     console.log(key ,':-' , value );
    
// }

// for of loop in objetcs

const myObj = {
    a : "Rajan",
    b : "Harkirat",
    c : "Devendra"
}

// for (const obj of myObj) {
//     console.log(obj);               // TypeError: myObj is not iterable
    
// }