// ======================================================
// DAY 02 - JAVASCRIPT CHEAT SHEET
// Objects • Destructuring • Modules
// ======================================================


// ======================================================
// OBJECTS
// ======================================================

// Create Object
const student = {
  name: "Dilvan",
  age: 22,
  course: "BICT"
};

console.log(student);


// ------------------------------------------------------
// Access Properties
// ------------------------------------------------------

console.log(student.name);      // Dot notation
console.log(student["age"]);    // Bracket notation


// ------------------------------------------------------
// Add Property
// ------------------------------------------------------

student.city = "Galle";


// ------------------------------------------------------
// Update Property
// ------------------------------------------------------

student.age = 23;


// ------------------------------------------------------
// Delete Property
// ------------------------------------------------------

delete student.city;


// ------------------------------------------------------
// Object Method
// ------------------------------------------------------

const person = {
  name: "Dilvan",

  greet() {
    console.log("Hello!");
  }
};

person.greet();


// ------------------------------------------------------
// Nested Object
// ------------------------------------------------------

const employee = {
  name: "John",

  address: {
    city: "Colombo",
    country: "Sri Lanka"
  }
};

console.log(employee.address.city);


// ======================================================
// OBJECT DESTRUCTURING
// ======================================================

const user = {
  name: "Dilvan",
  age: 22,
  country: "Sri Lanka"
};

const { name, age } = user;

console.log(name);
console.log(age);


// ------------------------------------------------------
// Rename Variable
// ------------------------------------------------------

const { name: userName } = user;

console.log(userName);


// ------------------------------------------------------
// Default Value
// ------------------------------------------------------

const { city = "Unknown" } = user;

console.log(city);


// ------------------------------------------------------
// Nested Destructuring
// ------------------------------------------------------

const data = {
  profile: {
    username: "dilvan123",
    email: "abc@gmail.com"
  }
};

const {
  profile: { username, email }
} = data;

console.log(username);
console.log(email);


// ======================================================
// ARRAY DESTRUCTURING
// ======================================================

const colors = ["Red", "Blue", "Green"];

const [first, second, third] = colors;

console.log(first);
console.log(second);
console.log(third);


// Skip Items

const numbers = [10, 20, 30, 40];

const [a, , c] = numbers;

console.log(a);
console.log(c);


// Rest Operator

const fruits = ["Apple", "Orange", "Banana", "Mango"];

const [fruit1, ...others] = fruits;

console.log(fruit1);
console.log(others);


// ======================================================
// MODULES
// ======================================================


// ======================================================
// math.js
// ======================================================

export function add(a, b) {
  return a + b;
}

export function subtract(a, b) {
  return a - b;
}

export function multiply(a, b) {
  return a * b;
}

export function divide(a, b) {
  return a / b;
}


// ======================================================
// string.js
// ======================================================

export function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

export function toUpper(text) {
  return text.toUpperCase();
}

export function countCharacters(text) {
  return text.length;
}


// ======================================================
// DEFAULT EXPORT
// greet.js
// ======================================================

export default function greet(name) {
  console.log(`Hello ${name}`);
}


// ======================================================
// IMPORTING MODULES
// main.js
// ======================================================

import {
  add,
  subtract,
  multiply,
  divide
} from "./utils/math.js";

import {
  capitalize,
  toUpper,
  countCharacters
} from "./utils/string.js";

import greet from "./utils/greet.js";

console.log(add(10, 5));
console.log(subtract(10, 5));
console.log(multiply(10, 5));
console.log(divide(10, 5));

console.log(capitalize("javascript"));
console.log(toUpper("mern"));
console.log(countCharacters("OpenAI"));

greet("Dilvan");


// ======================================================
// PROJECT STRUCTURE
// ======================================================

/*

day-02/

│
├── index.html
│
├── js/
│      main.js
│
└── utils/
       math.js
       string.js
       greet.js

*/


// ======================================================
// index.html
// ======================================================

/*

<!DOCTYPE html>

<html>

<head>
    <title>Day 02</title>
</head>

<body>

<h1>JavaScript Day 02</h1>

<script type="module" src="./js/main.js"></script>

</body>

</html>

*/


// ======================================================
// QUICK SYNTAX REFERENCE
// ======================================================

// Create Object
const obj = { key: value };

// Read
obj.key
obj["key"]

// Add
obj.newKey = value;

// Update
obj.key = value;

// Delete
delete obj.key;

// Object Destructuring
const { key } = obj;

// Rename
const { key: newName } = obj;

// Default Value
const { age = 18 } = obj;

// Array Destructuring
const [first, second] = array;

// Skip Item
const [a, , c] = array;

// Rest Operator
const [firstItem, ...rest] = array;

// Named Export
export function test(){}

// Default Export
export default function(){}

// Named Import
import { test } from "./file.js";

// Default Import
import test from "./file.js";