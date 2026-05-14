console.log(score);//ReferenceError: Cannot access 'score' before initialization

let score = 100;







{

    //TDZ for score starts here
    //console.log(score);//ReferenceError:
    //typeof score //ReferenceError:
    // TDZ -- for score end here---


    let score = 100; // safe to access
    console.log(score);// Declaration reached ,TDZ ends
}