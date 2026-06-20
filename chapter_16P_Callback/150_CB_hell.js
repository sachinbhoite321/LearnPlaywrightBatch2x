//Real qa scenarios : End to end  login for the app.vwo.com

//open browser ()
//Goto login page
//Enter credential
//clicklogin button

function openbrowser(callback) {
    console.log("Opening a chrome browser")
    setTimeout(function () {
        callback();
    }, 1000);
}

function gotoLoginPage(callback) {
    setTimeout(function () {
        console.log("Step 2: login page is loaded")
        callback();
    }, 2000)
}

function enterCredential(callback) {
    setTimeout(function () {
        console.log("step 3: Enter a login credentials")
        callback();
    }, 1000)
}

function clicklogin(callback) {
    console.log(" Step 4: Click on login button");

    setTimeout(function () {
        callback();
    }, 1000)
}

//This is callback hell

openbrowser(function () {
    gotoLoginPage(function () {
        enterCredential(function () {
            clicklogin(function () {
                console.log("ALL test cases has been completed")
            })
        })
    })
})