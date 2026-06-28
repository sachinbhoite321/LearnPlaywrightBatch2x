function sayHello(msg: string): void {
    console.log(msg);
}

//Function annotation
function greet(name: string): string {
    return `Hello ${name}`;
}

//never function never return (throws or infinite loop)

function throwError(message: string): never {
    throw new Error(message);
}

function infiniteLoop(): never {
    while (true) { };
}