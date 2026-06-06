// Checking arrays
//check if something is in array
let result = Array.isArray([1, 2, 3]);
console.log(result);

let result1 = Array.isArray("a");
console.log(result1);


//every and some

let result2 = [87, 25, 78, 90, 25].every(number => number > 20);

console.log(result2);

//playwite API

// let statusCode = [200, 201, 202, 300].every(statusCode => statusCode >= 200);

// console.log(statusCode);

//some at least one pass then true

let statusCode = [200, 201, 202, 300].some(statusCode => statusCode < 200);

console.log(statusCode);