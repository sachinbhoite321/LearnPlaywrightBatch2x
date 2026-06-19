function print() {

    console.log("Normal Function");
}

function placeOrder(item, sachin) {
    console.log("Your oder is placed");
    sachin();

}

//First way
placeOrder("item", print);

//Second Way

placeOrder("Burger", function () {
    console.log("Anoy function,Im also without name");
});

placeOrder("Chiz", () => {

    console.log("Arrow function arrow 3rd way");
})