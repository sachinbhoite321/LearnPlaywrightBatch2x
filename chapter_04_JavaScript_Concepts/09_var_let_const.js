
var browser = "chrome";
var browser = "firefox"; // redeclaration

browser = "edge";// reassignment

var testCases = ["login", "logout", "signup"];

for (var i = 0; i < testCases.length; i++) {

    console.log("Running test case:", testCases[i]);
}

console.log("Loop counter outside :", i);