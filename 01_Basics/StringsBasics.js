// defining a string
const str1 = "Hello"
const str2 = new String('World') // here we can use string as key value pair,
//  as String is a object

// String interpolation
const x = 'hello'
const y = ' world'
//console.log(x+y)
// but this is not very effective and in real world mostly time are avoided
//  instead we will use string interplation
console.log(`${x}${y}`)

// when using string as object it can be access as a key value pair
console.log(str2[0]) // W
console.log(str1[0])

// string methods

const myString = new String('cyberculoryzenneosis')
// myString.__prototype__..... anything available
//console.log(myString.length)
// console.log(myString.charAt(3)) // return the character at given index
// console.log(myString.indexOf('c')) // return the index of char given, the first char from lhs
// console.log(myString.substring(3, 7)) // give substring from start to end but ending index is not included
// console.log(myString.replaceAll('z', 'x'))
//console.log(myString.slice(-20, 12))
// const myGame = new String('Hitesh-hc')
// console.log(myGame.slice(-8,4)) 
// how to resolve negative index in resolved by : negative index + length of string

const myStringOne = "       prevue.co.in     "
console.log(myStringOne);
console.log(myStringOne.trim());

