function step1(callback) {
    console.log("Step 1: Open browser");
    setTimeout(callback, 500);
}

function step2(callback) {
    console.log("Step 2: Go to login page");
    setTimeout(callback, 500);
}

function step3(callback) {
    console.log("Step 3: Enter credentials");
    setTimeout(callback, 500);
}

// ... imagine defining step4, step5, ... up to step30

function step30(callback) {
    console.log("Step 30: Logout and close browser");
    setTimeout(callback, 500);
}

// Callback hell with 30 nested steps
step1(function () {
    step2(function () {
        step3(function () {
            step4(function () {
                step5(function () {
                    // ...
                    step29(function () {
                        step30(function () {
                            console.log("✅ All 30 test cases completed!");
                        });
                    });
                });
            });
        });
    });
});
