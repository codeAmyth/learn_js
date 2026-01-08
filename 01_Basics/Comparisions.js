console.log(2 > 4)
console.log(2 < 4)
console.log(2 == 4)
console.log(2 >= 4)
console.log(2 <= 4)
console.log(2 != 4)
// these are simple basic operations and there output is predictable


// both cases are true, here first conversion is done
console.log("2" > 1) // true
console.log("02" > 1) // true


// not recomended way of coding as the result can be anything because >< >= <= and == works differently
console.log(null > 0); // false
console.log(null == 0); //false
console.log(null >= 0); // true


// dont do it
console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);


// string comparision check value and datatype
console.log("2" === 2); // false and "2" -> string and 2 -> Number