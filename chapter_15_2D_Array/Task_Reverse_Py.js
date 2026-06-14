

for (let i = 5; i >= 0; i--) {

    //let row = "";
    console.log("*".repeat(i));
}

//using two for loop

for (let i = 5; i >= 0; i--) {
    for (let j = 5; j >= i; j--) {

        let row = "";
        row = row + "*";

        // console.log(row)
    }
    //console.log(row.trim());
    console.log(row);
}