const { error } = require("node:console");

let checkAuth = Promise.resolve("Auth Ok");
let checkDb = Promise.resolve("DB ok");
let catcheCheck = Promise.resolve("Catche ok");

Promise.all([checkAuth, checkDb, catcheCheck]).then(function (result) {
    console.log(" All the checks fine and ok ");
})


Promise.all([
    Promise.resolve("Ok for Auth"),
    Promise.reject("not ok for the DB"),
    Promise.resolve("Ok for the catche")

]).then(function (r) {
    console.log("ALL success")
}).catch(function (err) {
    console.log("error db down : " + err)
})



Promise.allSettled([

    Promise.resolve(" Test case 1 is passed"),
    Promise.resolve("Test case 2 is pass"),
    Promise.reject("Test case 3 is failed"),
    Promise.reject("Test case 4 is reject")
]).then(function (r) {

    console.log(r);
    r.forEach(r => r.status, r.result);
}).catch(function (error) {
    console.log(error);
    error.forEach(error => error.status + " " + error.result);

})
