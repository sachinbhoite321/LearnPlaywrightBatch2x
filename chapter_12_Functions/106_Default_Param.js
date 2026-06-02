function retry(testName, maxRetry = 3, delay = 1000) {

    console.log(`retrying ${testName} maxTime is ${maxRetry} ,and is delay by ${delay}`)
}

retry("Login");
retry("Registration", 5, 3000);