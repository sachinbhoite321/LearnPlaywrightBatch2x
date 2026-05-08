var name = "sachin";

var firstName = "Sachin"; // camelCase - starts with lowercase, each new word capitalized

// =============================================================================
// JavaScript Naming Conventions (Cases)
// =============================================================================

// 1. camelCase - First word lowercase, each subsequent word capitalized
// Most commonly used for variables and functions in JavaScript

var lastName = "Tendulkar";
var totalScore = 95;
var isUserLoggedIn = true;

function getUserData() {
    return { lastName, totalScore, isUserLoggedIn };
}

function calculateTotalPrice(price, quantity) {
    return price * quantity;
}

console.log("camelCase examples:", firstName, lastName, totalScore, isUserLoggedIn);

// 2. PascalCase - Every word starts with uppercase letter
// Commonly used for class names, constructor functions, and React components

class UserProfile {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    getDetails() {
        return `${this.name} is ${this.age} years old.`;
    }
}

class ShoppingCart {
    constructor() {
        this.items = [];
    }

    addItem(item) {
        this.items.push(item);
    }
}

let user = new UserProfile("Alice", 30);
console.log("PascalCase example:", user.getDetails());

// 3. snake_case - All lowercase with underscores between words
// Not as common in JavaScript, but used in some libraries/APIs

var user_name = "john_doe";
var total_score = 100;
var is_active = false;

function fetch_user_data() {
    return { user_name, total_score, is_active };
}

function calculate_area(length, width) {
    return length * width;
}

console.log("snake_case examples:", user_name, total_score, is_active);

// 4. SCREAMING_SNAKE_CASE (UPPER_SNAKE_CASE / CONSTANT_CASE)
// All uppercase with underscores between words
// Used for constants and environment configuration values

const MAX_USERS = 100;
const API_BASE_URL = "https://api.example.com";
const DEFAULT_TIMEOUT = 5000;
const PI_VALUE = 3.14159;

console.log("SCREAMING_SNAKE_CASE examples:", MAX_USERS, API_BASE_URL, DEFAULT_TIMEOUT);

// 5. kebab-case - All lowercase with hyphens between words
// NOT allowed for JavaScript variable/function/class names!
// Used for file names, CSS class names, and HTML attributes

// INVALID in JavaScript:
// var user-name = "John";  // SyntaxError
// function get-data() {}   // SyntaxError

// Valid usage examples (as strings):
var cssClassName = "main-container"; // variable name is camelCase, value is kebab-case
var fileName = "07_identifiers_part2.js"; // file names often use kebab-case or snake_case

console.log("kebab-case usage:", cssClassName, fileName);

// 6. Train-Case or HTTP-Header-Case - Uppercase words separated by hyphens
// Used in HTTP headers and some protocols
// Not valid for JS identifiers, but important to know

// Examples (as strings only):
var httpHeader = "Content-Type";
var authHeader = "Authorization";
console.log("Train-Case examples:", httpHeader, authHeader);

// Summary Table:
// | Case               | Example           | Usage in JS                  |
// |--------------------|-------------------|------------------------------|
// | camelCase          | getUserData       | Variables, Functions         |
// | PascalCase         | UserProfile       | Classes, Constructors        |
// | snake_case         | fetch_user_data   | Rare, some APIs/Libraries    |
// | SCREAMING_SNAKE    | MAX_USERS         | Constants                    |
// | kebab-case         | main-container    | Files, CSS (not identifiers) |
// | Train-Case         | Content-Type      | HTTP Headers (not identifiers)|