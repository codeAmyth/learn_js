let a = 500 // Global scope

if (true) {
    let a = 5000
    console.log("Inner" ,a)
   let x = 10
   const y = 20 // local scope
   var z = 30 
}
console.log("Outer:" ,a)
//console.log(x)
//console.log(y);
//console.log(z);  this is the reason why var is not used nowdays


