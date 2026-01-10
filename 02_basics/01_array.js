// Declaration of Array

const myArr = [0,1,2,3,4,5]
let myArr2 = ["roman","seth","dean"]
let myArr3 = new Array(6,7,8,9,10, "ankit", "rajat")
// console.log(myArr3)

/* Properties of Array : 

i). 0 based indexing
ii). includes different datatypes
iii). JS arrays are resizeable
iv). accessed by non negative integers only
v). copy operations creates shallow copy rather than deep copies

Shallow copy : A shallow copy of an object is a copy whose properties share the same references
Deep Copies : A deep copy of an object is a copy whose properties do not share the same references
*/

// Arrays methods

// myArr.push(7)
// console.log(myArr);


//  console.log(myArr.pop())
//  console.log(myArr);
 

//  myArr.unshift(8)
// console.log(myArr);

//  myArr.shift()
//  console.log(myArr);

//  let newArray = myArr.join()
//  console.log(newArray)

//  myArr2 = myArr3.join()
//  console.log(typeof myArr2);

// Slice and Splice

// const nArr1 = myArr.slice(1,4)
// console.log(nArr1);
// console.log(myArr)

// const nArr2 = myArr.splice(1,4)
// console.log(nArr2)
// console.log(myArr)

const csk = ["dhoni", "raina", "jadeja"]
const mi = ["rohit", "bumrah", "hardik"]

// what if we push one array into another?
// csk.push(mi)
// console.log(csk); // add mi as another array inside already existing array

// const india = csk.concat(mi)
// console.log(india);

// this can be done with array spreading as well

// const india = [...csk, ...mi]
// console.log(india);

// converting subarrays into arrays

// const confusing_sub_arrays = [1,2,3,[4,5,6],7,8,[9,10,11,[12,13]]]
// const converted_confusing_sub_array = confusing_sub_arrays.flat(Infinity); // instead of infinity go real deapth
// console.log(converted_confusing_sub_array);

// check if given data is array
console.log(Array.isArray("Divyanshu"));
console.log(Array.from("Divyanshu"))

console.log(Array.from({name : "Divyanshu"})) // we have to tell array will be created on 
// the basis of either key or value which is an interesting case

let score1 = 200
let score2 = 400
let score3 = 799
console.log(Array.of(score1, score2, score3));











