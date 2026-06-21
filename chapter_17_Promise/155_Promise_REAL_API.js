let apiCall = new Promise(function (resolve, reject) {

    resolve({
        status: 200, body: "User data"
    })
})

apiCall.then(function (Response) {

    console.log(Response);
}).catch(function (Response) {
    console.log(Response)
}).finally(function (Response) {

    console.log("Finally i ")
})

