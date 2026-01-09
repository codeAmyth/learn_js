// defining a number
const num1 = 300
// console.log(num1);

const num2 = new Number(400)
//console.log(num2);

//console.log(num2.toString().length)
//console.log(num2.toFixed(2)) // for particular decimal points => 400.00

const score = 123.8987
//console.log(score.toPrecision(4)) //  123.9 (returns a string representing this number
//  to the specified number of significant digits.)

// what if the number of zeros are large, and difficult to count?
const hundreds = 10000000000
//console.log(hundreds.toLocaleString('en-IN')) // in US standards for INdian standards use 'en-IN'

//+++++++++++++++++++++++++++++++++ MATHS +++++++++++++++++++++++++++++++++++++++++++++

// console.log(Math.abs(-5))  // 5 only - => +
// console.log(Math.round(4.6)) // round off values 5
// console.log(Math.ceil(4.3)) // 5
// console.log(Math.floor(4.8)) // 4
// console.log(Math.min(4,5,3,9,1)) // 1
// console.log(Math.max(4,5,3,9,1)) // 9

// using Math.random() for dice game

const diceMin = 1
const diceMax = 6

console.log(Math.floor(Math.random() * (diceMax - diceMin + 1) + diceMin));
