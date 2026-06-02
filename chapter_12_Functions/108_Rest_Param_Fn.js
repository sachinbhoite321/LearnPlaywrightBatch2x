// Rest of the param or spread param

function loginResult(suiteName, ...results) {

    console.log(suiteName);
    console.log(results)
}

loginResult("Login", 1, 2, 3);
loginResult("Reg Test", "Hello", "Hi")