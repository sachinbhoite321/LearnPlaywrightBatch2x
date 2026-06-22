
function apiCall(name) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve(name);
        }, 1000);
    });
}

async function end2endAPI() {
    console.log("starting the testing");
    let start = Date.now();

    let msg1 = await apiCall("Load the page");
    console.log(msg1);

    let msg2 = await apiCall("Enter credentials");
    console.log(msg2);

    let msg3 = await apiCall("Verify buttons");
    console.log(msg3);

    console.log("Total time:", Date.now() - start, "ms");
}

end2endAPI();
