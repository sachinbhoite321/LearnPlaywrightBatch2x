const { error } = require("node:console");

class Car {
    #engine;

    constructor(name, enginName) {
        this.name = name;
        this.#engine = enginName;
    }

    getEngine() {
        return this.#engine;
    }

    setEngine(setName) {
        if (typeof setName !== String || setName.trim() === "") {

            throw new Error("Invalid input")
        }
        return this.#engine = setName;
    }
}

const Tesla = new Car("Tesla", "V8");
try {
    console.log(Tesla.getEngine());
    console.log(Tesla.setEngine(""));
    console.log(Tesla.getEngine())
}
catch (err) {

    console.log("Caught Error :", err.name);

}
