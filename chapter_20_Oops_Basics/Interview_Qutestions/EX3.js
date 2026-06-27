class User {

    constructor(name) {
        this.name = name;
    }

    greet() {
        console.log("Hi im " + this.name);
    }


}

let us1 = new User("Allice");
let us2 = new User("Bob");

us1.greet();
us2.greet();