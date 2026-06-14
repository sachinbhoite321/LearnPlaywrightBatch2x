// let scores = [

//     [80, 90, 78], // Student 0 ,253
//     [60, 45, 70], // Student 1, 175
//     [95, 88, 92] // Student 2, 275
// ]

// let rowSum = scores.map(row => row.reduce((a, b) => a + b, 0));
// console.log(rowSum);

let suiteResult = [

    "Login-Pass", "Register-Pass", "Logout- pass",
    "search-pass", "filter-fail", "sort-pass",
    "Checkot-fail", "Payment-fail", "confirm-pass"

];

for (let i = 0; i < suiteResult.length; i++) {

    // for (let j = 0; j < suiteResult[i].length; j++) {

    if (suiteResult[i].includes("fail")) {
        console.log(suiteResult[i]);
    }
}

suiteResult.filter(result => result.includes("fail")).forEach(result => console.log(result))