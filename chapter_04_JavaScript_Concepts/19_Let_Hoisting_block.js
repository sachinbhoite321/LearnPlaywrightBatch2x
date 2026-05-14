//let is Blocked scope

let x = "global";

if (true) {

    let x = "block";
    console.log(x);
}