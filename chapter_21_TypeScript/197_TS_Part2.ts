let unknown: unknown = "Hello";

if (typeof unknown === 'string') {
    console.log("Hi");
}

let message: string;
let userName: string;

let userId: number;

//function annotation

function greet(name: string): string {
    return `Hello ${name}`;
}

//Arrow function annotation

const multiply = (a: number, b: number): number => a * b;

//Object annotation

let users: { names: string; ages: number } = {
    names: "John",
    ages: 56

}
