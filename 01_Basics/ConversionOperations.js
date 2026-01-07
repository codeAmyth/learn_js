let age = "33"
console.log(typeof age)
// conversion
let useAge = Number (age)
console.log(typeof useAge);
// here is a catch
let num1 = "456abc"
let num2 = Number (num1)
console.log(typeof num2)
console.log(num2) // NaN : Not a number

let x = null
x = Number (x)
console.log(x) // 0

let y = undefined
y = Number (y)
console.log(y) // NaN

let z = undefined
console.log(Boolean (z))

console.log(String(z))



// summary 

/*
"33" => 33
"string" => NaN
"456a" => NaN
true => 1
false => 0
null => 0
undefined => NaN
"stirng" => boolean true
"" => false
1 => boolean true
null => falae (boolean)
undefines => false (boolean)
string : null => "null"

true => "true"
undefined => "umdefined"

*/

