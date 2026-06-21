// let p = new Promise(function (resolve, reject) {

//     resolve(42);
// });

// p.then(function (rs) {
//     console.log("Answer : " + rs);
// })


// let d = new Promise(function (resolve, reject) {

//     reject("Something is broken");
// })
// d.catch(function (err) {
//     console.log("Caught : " + err)
// })


// let c = new Promise(function (resolve, reject) {
//     resolve(5);
// })

// c.then(function (value) {
//     return value * 10;
// }).then(function (value) {
//     console.log("Result: " + value);
// })


// let a = new Promise(function (resolve, reject) {
//     resolve(1);
// }).then(function (vale) {
//     console.log(vale);
//     return vale + 1;
// }).then(function (vale) {
//     console.log(vale);
//     return vale + 1;
// }).then(function (vale) {
//     console.log(vale);
// })

// Promise.resolve("Start")
//     .then(function (value) {
//         console.log(value);
//         throw new Error("Broke step at 2");
//     }).then(function () {
//         console.log("This will not run");
//     }).catch(function (err) {
//         console.log("Caught " + err.message);
//     })


// Promise.reject("Test failed")
//     .then(function (data) {
//         console.log("data", data);
//     }).catch(function (err) {
//         console.log("Caught : " + err);
//     }).finally(function () {
//         console.log("Clean up done");
//     })


// Promise.resolve("quick Win").then(function (msg) {
//     console.log(msg);
// })

// Promise.reject("quick lose").catch(function (msg) {
//     console.log(msg);
// })


let p1 = Promise.resolve("Login : Pass");
let p2 = Promise.resolve("Search : Pass");
let p3 = Promise.resolve("Logout : Pass");

Promise.all([p1, p2, p3]).then(function (Result) {
    console.log(Result);
})