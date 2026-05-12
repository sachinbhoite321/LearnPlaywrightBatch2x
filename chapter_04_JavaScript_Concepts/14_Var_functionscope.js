
var a = 10;

console.log(a);// Global scope

function printHellow() {

    console.log("The testing academy");
    var a = 20;
    console.log(a);

    if (true) {

        var a = 30;
        console.log(a);
    }

    console.log("F --->" + a);
}

console.log("Global --->" + a);
printHellow();

//var =trump,flipper,dual face, no trust worthy