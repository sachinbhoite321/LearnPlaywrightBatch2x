class TestCases {

    execute() {
        console.log("Running the generic test case");
    }
}

class UnitTest extends TestCases {

    execute() {
        console.log("Running the unit test case -- Checking the one function");
    }

}

class ApiTest extends TestCases {

    execute() {
        console.log("Running the API test case -- Sending HTTPS methods");
    }

}

class E2E extends TestCases {
    execute() {
        console.log("Execute end to end test cases");
    }
}

let test = [new UnitTest(), new ApiTest(), new E2E];

test.forEach(function (test) {
    test.execute();
});