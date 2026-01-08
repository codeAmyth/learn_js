/*
Javascript is a dynamically typed programming language, 
we do not need to explicitly declare the data type of a variable
, and the type of a variable can change during the program's execution
*/
// Datatypes are categorised into 2 types on the basis of how they are accessible by memory
//1). Primitive Data Types : there are 7 types:
// Number, String, Boolean, Null, Undefined, Symbol,BigInt
//Examples ->
const number1 = 34
let stringExmp = "string"
let isBoolean = true
let dataUndefined;
let dataNull = null;
let symbol1 = Symbol('123')
let symbol2 = Symbol('123')
// fun fact symbol1 is not equal to symbol2 even though both passes same string
console.log(symbol1 === symbol2) // false
let bigNumber = 4551454545454854n // putting n can represent a number into big number
// 2). Reference (Non primitive) : these are 3
// Array, functions, and Objects

const arrayExmp = ["apple", "banana", "guava", "mango"]

const objectExmp = {
    "name" : "yash",
    "nick name" : "rocking star",
    "upcoming film" : "toxic",
    "last film" : "kgf chapter 2"
}

const functionExmp = function() {
    console.log("Hello World, this is function examples.")
}

console.log(typeof objectExmp)
console.log(typeof dataUndefined)
console.log(typeof bigNumber)
