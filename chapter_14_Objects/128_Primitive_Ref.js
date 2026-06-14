// primitive vs reference

let a = 10;
let b = a;

b = 99;

console.log(b);
console.log(a);

//copied by the reference,  by reference
//Reference - Object,array,function

let obj = { value: 10 };
let obj1 = obj;

obj1.value = 99;

console.log(obj);