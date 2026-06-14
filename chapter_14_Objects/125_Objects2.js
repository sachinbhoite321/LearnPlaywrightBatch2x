//objects
//key vale

let student = { name: "Sachin", age: 32 };
let student1 = { name: "Shiva" };
let student2 = { name: "Sachin", age: 43, phone: 8726372210 };

//key will not be in double quotes
//below key is in double quotes its actually a json

let JSON_Student1 = { "name": "Altaf", "age": 54, "phone": 9273828288 };

let a = { status: "pass" };

//console.log(a);

//console.log(a.status);
//console.log(a["status"]);


let a1 = { status: "pass" };

let b = a1;

//console.log(a1.status);
//console.log(b.status);

a1.status = "fail";
console.log(b.status);
a1 = b.status = "pass";
console.log(a1);
console.log(b);
