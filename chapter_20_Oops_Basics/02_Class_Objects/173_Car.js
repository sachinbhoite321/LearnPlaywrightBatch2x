class Car {
    name;
    //CAB
    //Constructor
    //Atttribute
    //Behaviour
    constructor(name_given_during_obj_creation) {
        this.name = name_given_during_obj_creation;
    }

    drive() {

        console.log(this.name);
    }



}

const obj = new Car("Model");
obj.drive();
