
let a = 10;

console.log(a);// Global scope

function printHello() {

    console.log("The testing academy");
    let a = 20;
    console.log(a);

    if (true) {

        let a = 30;
        console.log(a);
    }

    console.log("F --->" + a);
}

console.log("Global --->" + a);
printHello();

//var =trump,flipper,dual face, no trust worthy