class BaseTest {

    setUp() {
        console.log("BaseTest : Open the browser");
    }
}

class ApiTest extends BaseTest {

    setUp() {
        console.log("ApiTest : Open the browser");

        super.setUp();
    }
}

const p = new ApiTest();
p.setUp();
