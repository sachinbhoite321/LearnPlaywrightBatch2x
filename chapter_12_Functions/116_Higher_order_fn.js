//Higher order function

//A function that takes a function as argument or return a function

function runWithLogin(testfn, testName) {

    let result = testfn();
    return result;

}

function login() {
    return `logged in`;
}


console.log(runWithLogin(login, "Regression"));
