// creating promise

const promiseOne = new Promise( (resolve, reject) => {
    // db calls, cryptography, network calls
   setTimeout( ()=> {
    console.log('Async task is completed.');
    resolve();
   }, 1000)
} );


// cosnuming promise

promiseOne.then(function() {
    console.log('Promise is consumed');
    
})

// method 2 

new Promise(function(resolve, reject) {
    setTimeout(function() {
        console.log('Async task 2');
        resolve()
    },1000)
}).then(function() {
    console.log("Async 2 is resolved");
    
})

// method 3

const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(function() {
        resolve({username : 'codeAmyth', password : 'code@Amyth'})
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user);
    
})

// promise 4

const promiseFour = new Promise(function(resolve, reject) {
    setTimeout( () => {
    let error = false;
    if (!error) {
        resolve({username: 'ankit', password: '123'})
    } else {
        reject('ERROR : Something went wrong')
    }
},1000)
})

promiseFour.then(function(user){
    console.log(user)
    return user.username;
})
.then(function(username) {
    console.log(username);
    
})
.catch(function(error) {
    console.log(error)
})
.finally(()=> console.log('The promise is either resolved or rejected'));