

function apiCall(name) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve(name);
        }, 1000);
    });
}

async function parallelTest() {
    let [r1, r2, r3] = await Promise.all([


        apiCall("Auth servive"),
        apiCall("Db service"),
        apiCall("Support Network")
    ])
    console.log(r1);
    console.log(r2);
    console.log(r3);
}

parallelTest();
