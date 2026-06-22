function getToken() {

    return Promise.resolve("OK Buddy cool");

}

async function run() {

    let token = await getToken();
    console.log(token);

}

run();