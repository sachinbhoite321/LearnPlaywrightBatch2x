const obj = { a: 1, b: 2, c: 3, d: 4 };

console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(Object.entries(obj));

const user = { name: " Sachin", age: 45, city: "Pune" };

for (const key in user) {
    console.log(`${key} : ${user[key]}`);
}

//Object.keys/values/entries

Object.keys(user).forEach(key => {
    console.log(key);
})

Object.values(user).forEach(values => {
    console.log(values);
})