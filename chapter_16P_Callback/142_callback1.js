
function print() {
    console.log("Im print call me after you done your work");
}

function add(callback) {
    console.log("Im add call me first and then print");
    callback();
}

//First way
add(print);


// Second way

function sachin(callback) {
    console.log("Im Sachin want to place for playwrite automation any how 1");
    callback("Im call back");
}

sachin(function (abc) { console.log("I want to place 2nd any how " + abc); })

// Third way using arrow


function construction(callback) {
    console.log("under construction");
    callback("painter");
}

construction((paint) => {
    console.log("ready building " + paint);
})