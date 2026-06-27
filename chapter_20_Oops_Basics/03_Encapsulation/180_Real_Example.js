class Person {

    #child1;
    #child2;
    name;

    constructor(pramod, ch1, ch2) {
        this.name = pramod;
        this.#child1 = ch1;
        this.#child2 = ch2;
    }

    setSetter() {
        return `${this.name},${this.#child1} , ${this.#child2}`
    }

    getChild1() {
        return this.#child1;
    }
}

const p = new Person("sachin", "varad", "Jenny")
console.log(p.setSetter());
console.log(p.child1);
console.log(p.getChild1());