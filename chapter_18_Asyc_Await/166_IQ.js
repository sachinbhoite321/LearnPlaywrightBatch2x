async function sayHello() {
    return "Hello, QA";
}

sayHello().then(function (abc) {

    console.log(abc);
})

async function getStatus() {

    let status = await Promise.resolve(200);

    console.log("Status code : " + status)

}
getStatus();