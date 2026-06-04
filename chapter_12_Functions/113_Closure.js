function outer() {

    let message = "hello";

    console.log("outer called");

    function inner() {

        console.log(message);
    }
    return inner;

}

let fu_inner = outer();
fu_inner();

inner()//This is an reference error
