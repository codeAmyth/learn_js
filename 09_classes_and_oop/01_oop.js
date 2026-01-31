const user = {
    firstName : "Rajat",
    lastName : "Bedi",
    activeHrs : 45,
    isLoggedIn : true,

    isElgibleForPromotion : function() {
        console.log(`${this.firstName} is eligible for promotion`)
    }
}

// console.log(user.firstName);
// console.log(user["activeHrs"]);
// user.isElgibleForPromotion();
// console.log(this); // return => {}

    function User(userName, activeHrs, isLoggedIn) {
        this.userName = userName;
        this.activeHrs = activeHrs;
        this.isLoggedIn = isLoggedIn;

        this.greetings = function() {
            console.log(`Welcome, ${this.userName}`);
            
        }
        //return this;
    }

    // const userOne  = new User("Binni", 12, true);
    // console.log(userOne);
    const userTwo = new User("Naman", 45, false);
    console.log(userTwo);
    console.log(userTwo.constructor)
    



