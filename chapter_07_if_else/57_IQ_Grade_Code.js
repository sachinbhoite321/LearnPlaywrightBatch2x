// Take a mark (0-100) and print the grade based on the rule
//90 and above A
//80-89 --B
//below 60--failed
let marks;
if (marks >= 90) {

    console.log("Your grade is A")

} else if (80 <= marks && marks <= 89) {

    console.log("Your grade is B");

} else if (70 <= marks && marks <= 79) {
    console.log("Your grade is c");
} else if (60 <= marks && marks <= 69) {

    console.log("Your grade is D");
} else if (60 > marks) {

    console.log("You are failed")
} else {

    console.log("reattempt")
}

