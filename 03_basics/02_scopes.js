let a = 500 // Global scope

if (true) {
    let a = 5000
  //  console.log("Inner" ,a)
   let x = 10
   const y = 20 // local scope
   var z = 30 
}
//console.log("Outer:" ,a)
//console.log(x)
//console.log(y);
//console.log(z);  this is the reason why var is not used nowdays

if (true) {
    const username = "Divyanshu"

    if (username === "Divyanshu") {
        const website = "Prevue"
       // console.log(username + website);
    }
    //console.log(website); // webiste scope is wrong
    
}
//console.log(username) // username is not in scope

// *********************** Intersting Fact about function declaration ************

// 1).

//console.log(addOne(6)) // still executed even the function declared afterwards

function addOne(value) {
    return value + 1;
}

//addOne(6); // will be executed here 
 //2).

// addTwo(6) //not executed
 const addTwo = function(value) {
    return value + 2;
 }

 //addTwo(6) // executed