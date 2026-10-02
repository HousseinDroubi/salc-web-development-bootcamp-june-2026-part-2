const addTwoNumbers = (n1, n2)=>{
    return n1+n2;
}

const PI = 3.14159;

class User{
    constructor(username, course){
        this.username = username;
        this.course = course;
    }
}

module.exports = {
    User,
    PI,
    addTwoNumbers
};