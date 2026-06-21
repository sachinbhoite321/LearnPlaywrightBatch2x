
let apiCall = new Promise(function (resolve, reject) {
    reject("Error message as 500");
})

apiCall.then(function (response) {
    console.log(response);
}).catch(function (response) {
    console.log(response)
})

//.then() is only for the success
//.catch() is only for the fail