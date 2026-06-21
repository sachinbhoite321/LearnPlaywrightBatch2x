function openBrowser() {
    return new Promise(function (resolve, reject) {
        resolve("Resolved with code 200");
    });
}

function enterLoginCredentials() {
    return new Promise(function (resolve, reject) {
        resolve("Enter login credentials");
    });
}

function verifyButtons() {
    return new Promise(function (resolve, reject) {
        resolve("Verify buttons which are loaded");
    });
}

function loadPage() {
    return new Promise(function (resolve, reject) {
        // If you want to simulate rejection, use reject
        reject("This is rejected");
    });
}

openBrowser()
    .then(function (msg) {
        console.log(msg); // "Resolved with code 200"
        return loadPage();
    })
    .then(function (msg) {
        console.log(msg); // would run if loadPage resolved
        return enterLoginCredentials();
    })
    .then(function (msg) {
        console.log(msg); // "Enter login credentials"
        return verifyButtons();
    })
    .then(function (msg) {
        console.log(msg); // "Verify buttons which are loaded"
    })
    .catch(function (err) {
        console.log("Error:", err); // "This is rejected"
    });
