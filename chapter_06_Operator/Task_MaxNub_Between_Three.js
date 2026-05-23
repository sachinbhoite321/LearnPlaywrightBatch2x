
let num1 = 23; num2 = 45; num3 = 87;

let max = num1 > num2
    ? (num1 > num3 ? num1 : num3) : num2 > num3 ? num2 : num3;


console.log(max);

console.log("-----------------------------------------------");
let a = 5;

console.log(a++ + ++a - --a + a-- + ++a);
// 5 + 7 - 6 + 6
console.log(a);