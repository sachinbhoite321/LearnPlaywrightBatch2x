let num1 = 23;
let num2 = 45;
let num3 = 87;
let num4 = 98;

let max = num1 > num2
    ? (num1 > num3
        ? (num1 > num4 ? num1 : num4)
        : (num3 > num4 ? num3 : num4))
    : (num2 > num3
        ? (num2 > num4 ? num2 : num4)
        : (num3 > num4 ? num3 : num4));
console.log("The maximum number between three number is : " + max);
