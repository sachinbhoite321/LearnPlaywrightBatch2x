
function cafe(item, callmeWhenReady) {

    console.log("finding but First tabel is full");
    console.log("finding but second tabel is full");
    console.log(`Tabale is ready with your oder is ${item}`);
    callmeWhenReady("8846374831");
}

function callmeWhenReady(abc) {
    console.log("Im ready to eat " + abc);
}

//First way

cafe("ColdCoffee", callmeWhenReady);

//second way

cafe("Pizza", function () {
    console.log("Call me on 3388");
})

// Third way
cafe("Burgurr", () => {
    console.log("Call me on 1122");
})