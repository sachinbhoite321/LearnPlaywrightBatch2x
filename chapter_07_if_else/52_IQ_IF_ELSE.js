
if ([]) console.log("Empty array is truthy");
if ("Hello") console.log("Hello and welcome");
if (42) console.log("Number is a truthy");
if ({}) console.log("Object is truthy");


if ("") console.log("Wont print");
if (0) console.log("Wont print");
if (undefined) console.log("wont print");
if (NaN) console.log("Wont print");
if (null) console.log("Wont print");


let name = undefined;

if (name) {
    console.log("Hi")
} else {
    console.log("Bye");
}