function cafe(item, callWhenTableisReady) {
    console.log("Finding table 1");
    console.log("Finding table 2");
    console.log("Finding table 3");
    console.log(item);
    callWhenTableisReady();
}

function callWhenTableisReady() {
    console.log("call on 8384747478");
}

//step 1 way

cafe("Burger", callWhenTableisReady);

//Step 2 way

cafe("Pizza", function () {

    console.log("call me on Pizza");
});

cafe("Coffee", () => {
    console.log("call me on coffee");
});