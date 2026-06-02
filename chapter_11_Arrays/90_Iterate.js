let tests = ["login", "checkout", "search"];

for (let i = 0; i < tests.length; i++) {
    console.log(tests[i]);
}

console.log("--------------------------");

for (tests of tests) {
    console.log(tests);
}
console.log("--------------------------");

// tests.forEach((i, index) => {
//     console.log(i, index);
// });/

console.log("--------------------------");

const student = ["akas", "sadd", "dhdhf"];
for (let i in student) {
    console.log(i, "->", student[i]);
}


console.log("--------------------------");

for (let [i], tests)