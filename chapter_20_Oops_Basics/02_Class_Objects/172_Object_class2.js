class Person {


    constructor() {
        console.log("Im a constructor");
    }
    //Attribute
    name;
    email;
    address;
    phone;

    //Behaviour
    eat() { };
    run() { };
}

const obj = new Person();
//Obje is object ref
// new person is an object
//console.log(obj);