function calculate(a, b, operation) {
    // console.log("here is " + a + " And " + b);

    return operation(a, b)
}

let result = calculate(10, 5, function (x, y) {
    return x + y;

});

console.log(result);