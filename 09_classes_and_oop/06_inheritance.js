class User {
    constructor (username) {
        this.username = username;
    }
    logMe() {
        console.log(`USERNAME is ${this.username}`);
        
    }
}

class Admin extends User {
    constructor (username, role, email, password) {
        super(username)
        this.role = role
        this.password = password;
    }

    login() {
        console.log(`Welcome! ${this.username}`);
        
    }

}

const newUser = new Admin("Mayank", 'SDE', '123@SDE')

const newUser2 = new User("Raham")

newUser.login();
newUser.logMe();