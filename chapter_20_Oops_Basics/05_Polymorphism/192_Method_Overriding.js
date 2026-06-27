class BasePage {

    setUp() {
        console.log("[Parent] : Open Browser");
    }

}

class ApiTest extends BasePage {
    setUp() {
        console.log("[Child] : Open Browser");
    }
}

new ApiTest().setUp();