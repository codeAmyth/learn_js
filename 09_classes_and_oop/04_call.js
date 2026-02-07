function createUserName(username) {
    this.username = username;
    console.log('called');
}

function createUser(username, email, password) {
    createUserName.call(this, username);
    this.email = email;
    this.password = password
}

const obj = new createUser('Rajat', 'rajat@fb.com', '1234');
console.log(obj);
