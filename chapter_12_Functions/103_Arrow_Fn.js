// if you want to make a normal function to arrow function
//remove the keyword function, remove the keyword return, remove the curly braces and use,

const doubleIt = n => n * 2;

console.log(doubleIt(2));

const printIt = name => name;

console.log(printIt("Sachin"));

// function add(a, b) {

//     return a + b;
// }

// const abc = add(20, 45);
// console.log(abc);

const add2 = (a, b) => a + b;

console.log(add2(67, 90));


// arrow function with no arguments

const arr2 = () => "history";

console.log(arr2());

const say = () => 'hi';

console.log(say());

const say1 = () => console.log('HI');
say1();

const greet = name => {

    const message = name + " HI ";

    return message;

}

console.log(greet('SACHIN'));