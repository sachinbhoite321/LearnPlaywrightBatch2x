//Leap year

let year = 2001;

if (year % 4 === 0 && year % 100 === !0 || year % 400 === 0) {
    console.log("This is an leap year")

} else {
    console.log("Not a leap year")
}