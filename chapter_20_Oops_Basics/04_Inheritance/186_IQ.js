class BaseTest {

    setUp() {
        console.log("Base : Open Browser");
    }

    tearDown() {
        console.log("Base : Close the Browser");
    }
}

class UITest extends BaseTest {

    setUp() {

        super.setUp();
        console.log("UITest : Open Browser");
    }

    tearDown() {
        super.tearDown();
        console.log("UITest : Close the Browser");
    }

}

new UITest().setUp();