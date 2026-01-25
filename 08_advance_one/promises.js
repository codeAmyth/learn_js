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


// using await and async

const promiseFive = new Promise( (resolve, reject) => {
    setTimeout(() => {
        let error = true;
        if (!error) {
            resolve({name : 'javascript' , extension : 'js'})
        } else {
            reject('Error: There is some error')
        }
    } , 1000)
})

async function consumePromiseFive() {
    try {
           const response = await promiseFive;
           console.log(response);
        
    } catch (error) {
        console.log(error);      
    }  
}

consumePromiseFive()

// async function getUsers() {

//     try {
//             const response = await fetch('https://jsonplaceholder.typicode.com/users')
//             const data = await response.json();
//             console.log(data);
//     } catch (error) {
//             console.log("E:", error);        
//     }
// }

// getUsers();

fetch('https://jsonplaceholder.typicode.com/users')
.then( (response) => {
    return response.json();
})
.then( (data) => {
    console.log(data);
})
.catch((error)=> {
    console.log(error);
    
})