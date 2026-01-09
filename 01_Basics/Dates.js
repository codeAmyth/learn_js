// const myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());

// const myCreatedDate = new Date(2004, 4, 27)
// console.log(myCreatedDate.toDateString());

// const myCreatedDate = new Date(2004, 4, 27, 5, 4)
// console.log(myCreatedDate.toLocaleString());

// const myCreatedDate = new Date("2023-01-12") // yyyy-mm-dd
// console.log(myCreatedDate.toLocaleString());

const myCreatedDate = new Date("05-27-2004") // mm-dd-yyyy
console.log(myCreatedDate.toLocaleString());

const myTimeStamp = Date.now()
console.log(myTimeStamp);

console.log(myCreatedDate.getTime())

// converting miliseconds into seconds
console.log(Math.floor(myTimeStamp / 1000));

// some more basic functions

let newDay = new Date();
console.log(newDay.getDay());
console.log(newDay.getDate())
console.log(newDay.getMonth())

console.log(`Hello guys today is ${newDay.getDay()}, of year ${newDay.getFullYear()}`)

newDate.toLocaleString('default', {
    weekday : "long"
})





