//Searching & Checking

let url = "https://Staging.vwmo.com/api/login?retry=true";

//includes

console.log(url.includes("Staging"));

console.log(url.includes("production"));

//Startwith endWith

console.log(url.startsWith("https"));
console.log(url.endsWith(""));

//index of

console.log(url.indexOf('t'));

console.log(url.lastIndexOf('t'));

console.log(url.indexOf('retry'));

//Search

console.log(url.search(/Staging/)); // Regex regular expression