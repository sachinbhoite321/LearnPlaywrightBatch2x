
let order = new Promise(function (resolve, reject) {
    let foodReady = true;
    if (foodReady) {
        resolve("Food is ready and pizza is delivered");
    } else {
        rejct("Food is ready but sorry for inconvenience due to heavy rain");
    }


})

console.log(order);