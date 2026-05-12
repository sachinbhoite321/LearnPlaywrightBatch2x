

var a = 10;

console.log(a);// Global scope

function print() {

    console.log("The testing academy");
    var a = 20;
    console.log(a);

    if (true) {

        var a = 30;
        console.log(a);
    }
}

print();

//var =trump,flipper,dual face, no trust worthy