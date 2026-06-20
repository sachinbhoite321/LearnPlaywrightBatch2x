function greetTester(name, callback) {

    console.log("Wlecome," + name);
    callback();
}

greetTester("Dev", function () {
    console.log("Let's start testing");
})


// Callback with parameter

function runTest(testName, callback) {

    let results = "Pass";
    callback(testName, results)
}

runTest("Login Test", function (testName, result) {

    console.log(testName + " And current result status is :" + result);
})


let bug = ["UI Glitch", "API timeout", "Wrong derict"];

bug.forEach(function (bug, index) {

    console.log("Bug # " + (index + 1) + " : " + bug)
})

console.log("Total bug is : " + bug.length);