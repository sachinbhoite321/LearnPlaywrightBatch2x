
const user = { name: "John", age: 45, city: "NYC" };

//console.log(user);
// Basic deconstruction

const { name, age } = user;
// console.log(name);
// console.log(age);

//Modify or rename the variable

const { name: userName, age: userAge } = user;

// console.log(userName);
// console.log(userAge);

//Default vale

// const { country = "India" } = user;
// console.log(country);

//Object inside object

const data = {

    user2: {
        name1: "Sachin",

        address: {
            city: "India"
        }


    }
};

const { user2: { address: { city } } } = data;
console.log(data.user2.address.city);
console.log(city);