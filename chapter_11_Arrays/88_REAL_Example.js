let browser = ["chrome", "firefox", "safari", "opera", "Edge"];

console.log(browser.length);
console.log(browser);

browser.pop();
console.log(browser);

let Removed = browser.shift();
console.log(browser);
console.log(Removed);

for (let i = 0; i < browser.length; i++) {

    console.log(browser[i]);

    if (browser[i] === "opera") {
        console.log("Opera browser is removed");
    }
}