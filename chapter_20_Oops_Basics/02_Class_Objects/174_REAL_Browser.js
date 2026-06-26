class TestCase {

    constructor(name, status, priority) {
        this.name = name;
        this.status = status;
        this.priority = priority;
    }

    display() {
        console.log(this.name, " its status is: ", this.status, "and priority is :", this.priority);
    }

}

new TestCase("Login", "passs", "P0").display();
let signUpTest = new TestCase("SignUp", "passs", "P1");

loginTest.display();
signUpTest.display();

console.log(loginTest);