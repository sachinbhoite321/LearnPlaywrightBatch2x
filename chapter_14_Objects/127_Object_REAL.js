let config = {};

config.browser = "chrome";
config.timeOut = 3000;
config.testName = "Login Test";

console.log(config);

delete config.browser;
console.log(config);
if (config.browser === "chrome") {
    console.log("I will execute the test cases");
}