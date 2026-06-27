
class Animal {

    constructor(name) {
        this.name = name;
    }
    eat() {
        console.log(this.name, " is Eating");
    }

    sleep() {
        console.log(this.name, + " is sleeping");
    }
}

class Dog extends Animal {

    constructor(name, breed) {
        super(name); // This is used for the parent constructor
        this.breed = breed;

    }

    bark() {
        console.log(this.name, "Is barking");
    }
}

let dog = new Dog("Rex", "Labrador");
dog.eat();
dog.bark();