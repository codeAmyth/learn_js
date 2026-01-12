// declaration of Objects 
// 1).Object Literal (no singleton)
mySymbol = Symbol("designation")
const jsUser = {
    name : "Divyanshu",
    surname : "Amit",
    "full name" : "Divyanshu Amit",
    "email" : "divyanshu@google",
    wfh : ["monday", "tuesdar", "wednesday"],
    leave : ["saturday", "sunday"],
    [mySymbol] : "sde"
}
// console.log(jsUser);
/* Key Notes :
i). objects have key value pairs
ii). keys are taken as a string, by computer no need to explicitly doing it
iii). "email" is taken to teach about different ways of accessing keys of objects
iv). [mySymbol] is correct way to declare symbol as key
*/

// accessing keys of symbols
// Method 1 using (.)
// console.log(jsUser.email);
// console.log(jsUser.wfh)

// Method 2 ([])
// console.log(jsUser["full name"]);
// console.log(jsUser[mySymbol]);

// functions inside objects;

jsUser.greetings = function() {
    console.log("Hello I am learning about Objects");  
}

jsUser.greetings2 = function() {
    console.log(`Hello ${this["full name"]} welcome`)
}

// console.log(jsUser.greetings()); // return function returned value
// console.log(jsUser.greetings2()); // returns function reference 

// 2). Constructors objects (singleton objects)

const jsUser2 = new Object();
jsUser2.id = 123
jsUser2.name = "Arpit Bala"
jsUser2.email = "arpit@somewhere"
//console.log(jsUser2);

// object nesting

const nestedObj = {
    user : {
        username : {
            firstName : "Shridhar",
            lastName : "raghvan"
        },
        address : {
            houseNo : 976,
            street : "shri temple",
            city : "chennai",
            state : "Tamil Nadu",
        }
    },
    product : ["Kausam", "Alluri", "Neta Ji"]
}

// console.log(nestedObj);
// console.log(nestedObj.product);
// console.log(nestedObj.user.username.firstName);
// console.log(nestedObj.user.address.city);

// combine multiple objects together

const obj1 = {
    1 : "a" , 2: "b"
}

const obj2 = {
    3 : "c" , 4: "d"
}

// there are 2 ways of doing this : 1). Object.assign
//                                  2). Spreading operator

// Object.assign : 
// const obj3 = Object.assign({}, obj1, obj2) // Object.assign(target, source)
// console.log(obj3);

// spreading operator
const obj3 = {...obj1, ...obj2}
// console.log(obj3);
// accessing multiple objects

const obj = [
    {
        id : 1,
        userName : "ankit"
    },
     {
        id : 2,
        userName : "ankita"
    },
]
// console.log(obj[1].userName);

// userful functions
// console.log(Object.keys(jsUser));
// console.log(Object.values(jsUser));

// Object de-structuring : syntax for accessing object multiple times
const course = {
    id : 123,
    courseName : "investment banking",
    instructor : "Ronnie Screwala",
    language : "english"
}

const {instructor} = course
console.log(instructor);

const {courseName} = course
console.log(courseName);



