// for each loop

const myArr = ["Java", "Javascript", "Python", "C/C++"]

// myArr.forEach(function (val) {
//     console.log(val);
// } )

// myArr.forEach((val) => {
//     console.log(val);
    
// })

// function printMe(item) {
//     console.log(item)
// }

// myArr.forEach(printMe)

// myArr.forEach( (val, ind, arr) => {
//     console.log(val, ind, arr);
    
// })

const programming = [
    {
        language : 'Java',
        extension : '.java'
    },
    {
        language : 'python',
        extension : '.py'
    },
    {
        language : 'Javascript',
        extension : '.js'
    },
]

programming.forEach( (obj) => {
    console.log(obj.extension);
    
})
