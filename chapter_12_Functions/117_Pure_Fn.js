//pure function
//pure function is always return the same output for the same input and has no side effect


function calculator(total, passed) {

    return ((passed / total) * 100).toFixed(2);

}

console.log(calculator(10, 7));
console.log(calculator(10, 7));

//Impure function -- depend on external state
function isPassing(score) {
    return score >= threshold;//-- depend on external variable
}

let threshold = 70;

console.log(isPassing(threshold));

threshold = 50;

console.log(isPassing(threshold));