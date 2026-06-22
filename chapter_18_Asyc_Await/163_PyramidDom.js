
function openBrowser() {
    return Promise.resolve("Open the browser");
}

function pageLoad() {
    return Promise.resolve("Successfully load the page");
}

function entrCredentials() {
    return Promise.resolve("Successfully enter a credentials");
}

function clickOnLogin() {
    return Promise.resolve("Click on login button");
}

async function end2end() {

    let msg1 = await openBrowser();
    console.log(msg1)
    let msg2 = await pageLoad();
    console.log(msg2)
    let msg3 = await entrCredentials();
    console.log(msg3)
    let msg4 = await clickOnLogin();
    console.log(msg4)
}

end2end();