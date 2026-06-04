let g_x = 10;

function outer() {

    //let x = 11;

    function inner() {
        let y = 21;
        console.log(x);
        console.log(y);


    }
    inner();
    //console.log(y);
}

outer();
//inner();