const user = {
    name: "john",
    age: 20,
    email: "johnyz@gmail.com"
}

// console.log(user);
// console.log(user.name);
// console.log(user["age"]);

//Dynamic property access

const key = "age";
console.log(user.age);

//Adding & modifying property

user.city = "pune";
user.age = 50;

//console.log(user);

console.log(Object.getOwnPropertyDescriptor(user, "email"));