 let myString = 'Ankit        ';
// // print actual length removing spaces that works with every other ojects as well
    String.prototype.trueLength = function() {
        console.log(`${this}`)
        console.log(`${this.trim().length}`);   
    }
    myString.trueLength()
// function getRealLength(myString) {

// }

const myPhone = ['Iphone', 'Moto']
const myObj = {firstName : 'Divyanshu',
               lastName : 'Amit',

               sayHello : function () {
                console.log("HEllo");        
               }
}

Object.prototype.heyWorld = function() {
    console.log('Hello World')  
}

// myObj.heyWorld();

// myPhone.heyWorld()

Array.prototype.heyBrother =  function() {
    console.log('Hello Brother');
    
}

// myObj.heyBrother();

// myPhone.heyBrother()

// Inheritance

const user = {
    name : 'xyz',
    email : 'xyz@gmk.com'
}

const Teacher = {
    makeVideo : true
}

const TeacherSupport = {
    makeAssignment: true
}

const TSSupport = {
    canTakeTest : true,
    __proto__ : TeacherSupport
}

// console.log(TSSupport.canTakeTest);      // true
// console.log(TSSupport.makeAssignment);   // true (via prototype)

// Moder syntax

Object.setPrototypeOf(Teacher, user)
// console.log(Teacher.name);
