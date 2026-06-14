
const user = {
    user: "Sachin",
    password: "Asdf#2",
    captha: 34135
}

const calculator = {
    value: 0,
    value1: 1,
    add(value, value1) {

        // console.log(value + value1);
        return value + value1;
    }, sub(value, value1) {
        console.log(value1 - value);
        return value1 - value;
    }

}

let addition = calculator.add(10, 67);
console.log(addition);
//console.log(calculator.sub);
