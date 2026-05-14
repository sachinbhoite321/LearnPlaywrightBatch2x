// ============================================================
// NULL vs UNDEFINED in JavaScript — Simple Explanation
// ============================================================
//
// UNDEFINED:
//   → Means "I don't have a value yet"
//   → JavaScript automatically assigns this when:
//       • You declare a variable but don't assign a value
//       • A function doesn't return anything
//       • You try to access an object property that doesn't exist
//   → typeof undefined  →  "undefined"
//
// NULL:
//   → Means "I intentionally want this to be empty"
//   → YOU (the programmer) assign this to say "no value here"
//   → typeof null  →  "object"  (this is a famous JavaScript bug!)
//
// QUICK RULE:
//   undefined = JavaScript saying "no value"
//   null      = YOU saying "no value"
//
// ============================================================


// ---------------------------
// 1. UNDEFINED examples
// ---------------------------

// a) Variable declared but not assigned
let name;
console.log("1a) Declared but not assigned:", name); // undefined


function greet() {

}

console.log(greet()); // undefined



// ---------------------------
// 2. NULL examples
// ---------------------------

// a) Intentionally setting "no value"
let email = "user@example.com";
email = null;   // clearing the value on purpose
console.log("2a) Set to null:", email);                        // null

// b) typeof null (famous JS quirk!)
console.log("2b) typeof null:", typeof null);                  // "object" (bug!)




// ---------------------------
// 3. COMPARISON
// ---------------------------

console.log("\n--- Comparisons ---");

// Loose equality (==) — true because both represent "no value"
console.log("3a) null == undefined:", null == undefined);      // true

// Strict equality (===) — false because types are different
console.log("3b) null === undefined:", null === undefined);    // false

console.log("3c) typeof null:", typeof null);                  // "object"
console.log("3d) typeof undefined:", typeof undefined);        // "undefined"


// ---------------------------
// 4. CHECKING for null or undefined
// ---------------------------

let value1 = null;
let value2 = undefined;
let value3 = 0;
let value4 = "";

// Check specifically for null
console.log("\n--- Checking values ---");
console.log("4a) value1 === null:", value1 === null);          // true

// Check specifically for undefined
console.log("4b) value2 === undefined:", value2 === undefined); // true

// Check for either null OR undefined (common pattern)
console.log("4c) value1 == null:", value1 == null);            // true  (null)
console.log("4d) value2 == null:", value2 == null);            // true  (undefined)
console.log("4e) value3 == null:", value3 == null);            // false (0 is not null/undefined)
console.log("4f) value4 == null:", value4 == null);            // false (empty string is not null/undefined)


// ---------------------------
// 5. REAL-WORLD USE CASE
// ---------------------------

let user = {
    name: "John",
    age: 30,
    middleName: null,      // User has no middle name (intentional)
    nickname: undefined    // We haven't asked for a nickname yet
};

console.log("\n--- Real-world example ---");
console.log("5a) middleName (null):", user.middleName);        // null     — we KNOW there's no middle name
console.log("5b) nickname (undefined):", user.nickname);       // undefined — we don't know yet

// So if we want to check if a value is ACTUALLY set (not null, not undefined):
function isReallySet(val) {
    return val !== null && val !== undefined;
}

console.log("5c) Is middleName set?", isReallySet(user.middleName));   // false
console.log("5d) Is name set?", isReallySet(user.name));               // true
