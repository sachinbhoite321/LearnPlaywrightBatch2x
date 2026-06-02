
function runTest(name, status, duration) {

    return `${name} and its status is ${status} with duration (${duration}ms)`;
}

const r = runTest("Sachin", 200, 1000);

console.log(r);