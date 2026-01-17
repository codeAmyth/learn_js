// reduce
// given an array find the sum

const price = [1,2,3,4,5]
// const total = price.reduce( function (acc, curVal) {
//     console.log(`accumulator: ${acc} and current value ${curVal}`)
    
//     return acc+curVal;
// }, 0)

// console.log(total);

// const total = price.reduce((acc, curVal) => {
//     return acc+curVal;
// }, 0)

const total = price.reduce ( (acc , curVal) => acc+curVal, 0 )

console.log(total);
