
let testRun = new Promise(function (resolve, reject) {
    let apiCall = true;

    if (apiCall) {
        resolve("Status code is 200")
    } else

        reject("Error for 500");

})

testRun.then(function (respose) {
    console.log(respose);
}).catch(function (respose) {
    console.log(respose);
}).finally(function (respose) {
    console.log("Any how i will executed " + respose)
})