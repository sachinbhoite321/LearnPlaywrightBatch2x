class F1 {
    money() {
        console.log("1 Cr");
    }
}
class F2 {
    money() {
        console.log("1.5 Cr");
    }
}

//class Son extends F1, F2 // Syntax Error
class Son extends F1, F2 {

}

new Son().money();