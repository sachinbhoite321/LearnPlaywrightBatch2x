// == (Loose Equality) vs === (Strict Equality)
// JavaScript has two ways to compare values: == and ===
// == performs type coercion before comparison
// === compares both value and type without coercion

// 1. Number vs String comparison
console.log("1. Number vs String:");
console.log(5 == "5");   // true  -> string "5" is converted to number 5
console.log(5 === "5");  // false -> different types (number vs string)

// 2. Number vs Boolean comparison
console.log("\n2. Number vs Boolean:");
console.log(1 == true);   // true  -> true is converted to 1
console.log(1 === true);  // false -> different types
console.log(0 == false);  // true  -> false is converted to 0
console.log(0 === false); // false -> different types

// 3. Null vs Undefined
console.log("\n3. Null vs Undefined:");
console.log(null == undefined);   // true  -> special case, they are considered equal
console.log(null === undefined);  // false -> different types

// 4. Null vs 0
console.log("\n4. Null vs 0:");
console.log(null == 0);   // false -> null is not coerced to 0 with ==
console.log(null === 0);  // false -> different types

// 5. Undefined vs 0
console.log("\n5. Undefined vs 0:");
console.log(undefined == 0);   // false
console.log(undefined === 0);  // false

// 6. String Empty vs 0
console.log("\n6. Empty String vs 0:");
console.log("" == 0);    // true  -> empty string is converted to 0
console.log("" === 0);   // false -> different types

// 7. String "true" vs Boolean true
console.log("\n7. String 'true' vs Boolean true:");
console.log("true" == true);   // false -> "true" is converted to NaN, true to 1
console.log("true" === true);  // false -> different types

// 8. NaN comparisons (NaN is not equal to anything, even itself)
console.log("\n8. NaN comparisons:");
console.log(NaN == NaN);   // false
console.log(NaN === NaN);  // false

// 9. Object comparison
console.log("\n9. Object comparison:");
let obj1 = { a: 1 };
let obj2 = { a: 1 };
let obj3 = obj1;
console.log(obj1 == obj2);   // false -> different references
console.log(obj1 === obj2);  // false -> different references
console.log(obj1 == obj3);   // true  -> same reference
console.log(obj1 === obj3);  // true  -> same reference

// 10. Array comparison
console.log("\n10. Array comparison:");
console.log([1, 2] == "1,2");   // true  -> array is converted to string
console.log([1, 2] === "1,2");  // false -> different types
console.log([1, 2] == [1, 2]);   // false -> different references
console.log([1, 2] === [1, 2]);  // false -> different references

// 11. Special coercion cases
console.log("\n11. Special coercion cases:");
console.log([] == false);   // true  -> [] becomes "", then 0, false becomes 0
console.log([] === false);  // false -> different types
console.log("" == false);   // true  -> both become 0
console.log("" === false);  // false -> different types

// 12. Best Practice: Always use === (strict equality) to avoid unexpected type coercion
// == can lead to confusing and hard-to-debug behavior
// === is predictable and safer

// Example of confusing == behavior:
console.log("\n12. Why === is safer:");
console.log([] == ![]);   // true  -> confusing! [] is truthy, ![] is false, [] == false is true
console.log([] === ![]);  // false -> clear and predictable
