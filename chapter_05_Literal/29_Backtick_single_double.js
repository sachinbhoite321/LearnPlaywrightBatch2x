// Backtick (`), Single ('), and Double (") Quotes - Differences

// 1. Single Quotes ('') - Simple string, escape inner single quotes
let single = 'Hello, World!';
let singleEscape = 'It\'s a nice day';

console.log("Single:", single);
console.log("Single with escape:", singleEscape);

// 2. Double Quotes ("") - Simple string, escape inner double quotes
let double = "Hello, World!";
let doubleEscape = "He said \"Hello\"";

console.log("Double:", double);
console.log("Double with escape:", doubleEscape);

// 3. Backticks (``) - Template Literals: multi-line + interpolation
let name = "Sachin";
let backtick = `Hello, ${name}!`;          // String interpolation
let multiLine = `Line 1
Line 2
Line 3`;                                 // Multi-line string

console.log("Backtick interpolation:", backtick);
console.log("Backtick multi-line:");
console.log(multiLine);

// Quick Summary:
// '' / ""  -> Basic strings. Need escaping for same quote type inside.
// ``       -> Template literals. Supports ${variable} and multi-line text.
