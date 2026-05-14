// ============================================================
// JavaScript NUMBER LITERALS — Complete Guide
// ============================================================
// JavaScript has ONE main number type: "number" (IEEE 754 double-precision 64-bit)
// PLUS: "bigint" for arbitrarily large integers
// ============================================================


// ---------------------------
// 1. INTEGER LITERALS
// ---------------------------

// a) Decimal (Base 10) — the most common
let decimal = 42;
console.log("1a) Decimal:", decimal);           // 42

// b) Hexadecimal (Base 16) — prefix 0x or 0X
let hex = 0xFF;
console.log("1b) Hexadecimal 0xFF:", hex);      // 255

let hex2 = 0xABC;
console.log("1c) Hexadecimal 0xABC:", hex2);    // 2748

// c) Octal (Base 8) — prefix 0o or 0O
let octal = 0o77;
console.log("1d) Octal 0o77:", octal);          // 63

// d) Binary (Base 2) — prefix 0b or 0B
let binary = 0b1010;
console.log("1e) Binary 0b1010:", binary);      // 10


// ---------------------------
// 2. FLOATING-POINT LITERALS
// ---------------------------

let float1 = 3.14;
console.log("2a) Float:", float1);              // 3.14

let float2 = .5;        // leading zero is optional
console.log("2b) .5:", float2);                 // 0.5

let float3 = 5.;        // trailing digits optional
console.log("2c) 5.:", float3);                 // 5

let float4 = -123.456;
console.log("2d) Negative float:", float4);     // -123.456


// ---------------------------
// 3. SCIENTIFIC NOTATION (Exponential)
// ---------------------------
// format:  [digits]e[+| -][digits]

let sci1 = 1e3;         // 1 × 10³ = 1000
console.log("3a) 1e3:", sci1);                  // 1000

let sci2 = 1e-3;        // 1 × 10⁻³ = 0.001
console.log("3b) 1e-3:", sci2);                 // 0.001

let sci3 = 2.5e5;       // 2.5 × 10⁵ = 250000
console.log("3c) 2.5e5:", sci3);                // 250000

let sci4 = 4.2E-2;      // 4.2 × 10⁻² = 0.042
console.log("3d) 4.2E-2:", sci4);               // 0.042


// ---------------------------
// 4. NUMERIC SEPARATORS (ES2021)
// ---------------------------
// Underscores _ make large numbers readable

let million = 1_000_000;
console.log("4a) 1_000_000:", million);         // 1000000

let bytes = 0xFF_FF;
console.log("4b) 0xFF_FF:", bytes);             // 65535

let binarySep = 0b1010_0001;
console.log("4c) 0b1010_0001:", binarySep);     // 161

// NOTE: Cannot use at start, end, or next to decimal point
// INVALID: _1000, 1000_, 1_.0, 1._0


// ---------------------------
// 5. BIGINT (For arbitrarily large integers)
// ---------------------------
// Suffix with 'n' — not limited to 64-bit

let big = 9007199254740991n;     // Number.MAX_SAFE_INTEGER
console.log("5a) BigInt:", big);                  // 9007199254740991n

let huge = 123456789012345678901234567890n;
console.log("5b) Huge BigInt:", huge);

let bigHex = 0xFF_FFn;
console.log("5c) BigInt hex:", bigHex);           // 65535n

// Cannot mix BigInt and regular number directly
// console.log(10n + 5);   // ERROR!
console.log("5d) 10n + 5n =", 10n + 5n);          // 15n

console.log("5e) typeof 10n:", typeof 10n);       // "bigint"


// ---------------------------
// 6. SPECIAL NUMBER VALUES
// ---------------------------

// a) Infinity — result of dividing by zero
console.log("6a) 1 / 0:", 1 / 0);                 // Infinity
console.log("6b) -1 / 0:", -1 / 0);               // -Infinity
console.log("6c) Infinity:", Infinity);           // Infinity
console.log("6d) -Infinity:", -Infinity);         // -Infinity

// b) NaN — "Not-a-Number" (invalid math operation)
console.log("6e) 0 / 0:", 0 / 0);                 // NaN
console.log("6f) 'abc' / 2:", "abc" / 2);         // NaN
console.log("6g) Math.sqrt(-1):", Math.sqrt(-1)); // NaN

// Checking NaN (NaN !== NaN!)
console.log("6h) NaN === NaN:", NaN === NaN);     // false!
console.log("6i) Number.isNaN(NaN):", Number.isNaN(NaN)); // true

// c) Number constants
console.log("6j) Number.MAX_VALUE:", Number.MAX_VALUE);
console.log("6k) Number.MIN_VALUE:", Number.MIN_VALUE);
console.log("6l) Number.MAX_SAFE_INTEGER:", Number.MAX_SAFE_INTEGER);
console.log("6m) Number.MIN_SAFE_INTEGER:", Number.MIN_SAFE_INTEGER);
console.log("6n) Number.EPSILON:", Number.EPSILON);


// ---------------------------
// 7. POSITIVE & NEGATIVE ZERO
// ---------------------------
// JavaScript has both +0 and -0

console.log("7a) +0:", +0);                       // 0
console.log("7b) -0:", -0);                       // 0 (prints 0!)
console.log("7c) 1 / +0:", 1 / +0);               // Infinity
console.log("7d) 1 / -0:", 1 / -0);               // -Infinity
console.log("7e) +0 === -0:", +0 === -0);         // true
console.log("7f) Object.is(+0, -0):", Object.is(+0, -0)); // false


// ---------------------------
// 8. typeof & CHECKS
// ---------------------------

console.log("8a) typeof 42:", typeof 42);         // "number"
console.log("8b) typeof 3.14:", typeof 3.14);     // "number"
console.log("8c) typeof Infinity:", typeof Infinity); // "number"
console.log("8d) typeof NaN:", typeof NaN);       // "number" (surprise!)
console.log("8e) typeof 10n:", typeof 10n);       // "bigint"

// Check if value is a finite number
console.log("8f) Number.isFinite(42):", Number.isFinite(42));       // true
console.log("8g) Number.isFinite(Infinity):", Number.isFinite(Infinity)); // false
console.log("8h) Number.isFinite(NaN):", Number.isFinite(NaN));     // false

// Check if value is an integer
console.log("8i) Number.isInteger(42):", Number.isInteger(42));     // true
console.log("8j) Number.isInteger(3.14):", Number.isInteger(3.14)); // false
console.log("8k) Number.isInteger(42.0):", Number.isInteger(42.0)); // true


// ---------------------------
// 9. PRIMITIVE vs NUMBER OBJECT
// ---------------------------

let prim = 100;              // primitive number
let obj = new Number(100);   // Number object (AVOID using!)

console.log("9a) typeof prim:", typeof prim);     // "number"
console.log("9b) typeof obj:", typeof obj);       // "object"
console.log("9c) prim == obj:", prim == obj);     // true (loose)
console.log("9d) prim === obj:", prim === obj);   // false (strict)

// Recommendation: Always use primitive numbers!


// ============================================================
// SUMMARY TABLE
// ============================================================
//
// | Literal Type        | Example           | Output / Value     |
// |---------------------|-------------------|--------------------|
// | Decimal integer     | 42                | 42                 |
// | Hexadecimal         | 0xFF              | 255                |
// | Octal               | 0o77              | 63                 |
// | Binary              | 0b1010            | 10                 |
// | Floating-point      | 3.14, .5, 5.      | 3.14, 0.5, 5       |
// | Scientific          | 1e3, 2.5e-2       | 1000, 0.025        |
// | Numeric separator   | 1_000_000         | 1000000            |
// | BigInt              | 9007199254740991n | 9007199254740991n  |
// | Infinity            | 1 / 0             | Infinity           |
// | NaN                 | 0 / 0             | NaN                |
// | Positive/Negative 0 | +0, -0            | 0, 0 (special!)    |
//
// ============================================================
