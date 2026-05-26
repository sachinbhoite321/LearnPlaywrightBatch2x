let result = ["pass", "fail", "pass", "error"];

console.log(result.indexOf("pass"));//1

console.log(result.indexOf("skip"));//-1 when element is not present

console.log(result.lastIndexOf("error"));//3

console.log(result.includes("error"));// true

console.log(result.includes("skip"));// false

//find the serching element

let num = [10, 20, 30, 40];
num.find(x => x < 20);//10
console.log(num.find(x => x < 20));