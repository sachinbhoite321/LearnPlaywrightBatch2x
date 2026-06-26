
class Calculator {

    constructor(num1, num2) {

        this.add = num1 + num2;
        this.sub = num2 - num1;
        this.mult = num1 * num2;
        this.div = num1 / num2;

    }

}

const add = new Calculator(12, 23);

console.log(add.add);
console.log(add.mult);
console.log(add.div);
console.log(add.sub);
