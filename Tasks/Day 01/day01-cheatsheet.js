/*
========================================
🚀 MERN - Day 01 Cheat Sheet
Topics:
1. let & const
2. Arrow Functions
3. Template Literals
4. Arrays
5. map()
6. filter()
7. find()
8. Sample Data Rendering
========================================
*/


// ======================================
// 1. let
// ======================================

let age = 22;

console.log(age);

age = 23;

console.log(age);


// ======================================
// 2. const
// ======================================

const country = "Sri Lanka";

console.log(country);

// ❌ Error
// country = "India";


// ======================================
// let vs const
// ======================================

// let -> value can change
let score = 0;
score++;

// const -> value cannot be reassigned
const pi = 3.14;


// ======================================
// 3. Arrow Functions
// ======================================

// Normal Function

function greet1() {
    console.log("Hello");
}

greet1();


// Arrow Function

const greet2 = () => {
    console.log("Hello");
};

greet2();


// Arrow Function with Parameters

const add = (a, b) => {
    return a + b;
};

console.log(add(10, 20));


// Short Arrow Function

const multiply = (a, b) => a * b;

console.log(multiply(5, 6));


// One Parameter

const square = number => number * number;

console.log(square(8));


// ======================================
// 4. Template Literals
// ======================================

const firstName = "Dilvan";
const city = "Colombo";

console.log(`Hello ${firstName}`);

console.log(`${firstName} lives in ${city}.`);


// Multi-line String

const message = `
Welcome
to
MERN Stack
`;

console.log(message);


// ======================================
// 5. Arrays
// ======================================

const numbers = [10, 20, 30, 40, 50];

console.log(numbers);


// ======================================
// Sample Data
// ======================================

const students = [
    {
        id: 1,
        name: "Dilvan",
        age: 22,
        mark: 80
    },
    {
        id: 2,
        name: "John",
        age: 20,
        mark: 45
    },
    {
        id: 3,
        name: "Nimal",
        age: 23,
        mark: 60
    },
    {
        id: 4,
        name: "Kasun",
        age: 21,
        mark: 90
    }
];


// ======================================
// 6. map()
// Creates a NEW array
// ======================================

// Get names

const names = students.map(student => student.name);

console.log(names);


// Get marks

const marks = students.map(student => student.mark);

console.log(marks);


// Double numbers

const doubled = numbers.map(number => number * 2);

console.log(doubled);


// ======================================
// 7. filter()
// Returns matching items
// ======================================

// Marks >= 60

const passedStudents = students.filter(student => student.mark >= 60);

console.log(passedStudents);


// Age > 21

const olderStudents = students.filter(student => student.age > 21);

console.log(olderStudents);


// Numbers > 20

const bigNumbers = numbers.filter(number => number > 20);

console.log(bigNumbers);


// ======================================
// 8. find()
// Returns FIRST matching object
// ======================================

const student1 = students.find(student => student.id === 2);

console.log(student1);


const student2 = students.find(student => student.name === "Kasun");

console.log(student2);


// ======================================
// Build Sample Data
// ======================================

const products = [
    {
        id: 1,
        name: "Laptop",
        price: 250000
    },
    {
        id: 2,
        name: "Mouse",
        price: 3000
    },
    {
        id: 3,
        name: "Keyboard",
        price: 8000
    },
    {
        id: 4,
        name: "Monitor",
        price: 50000
    }
];


// ======================================
// Render List
// ======================================

products.map(product => {
    console.log(product.name);
});


// Render with Template Literal

products.map(product => {
    console.log(`${product.name} - Rs.${product.price}`);
});


// Filter Expensive Products

const expensiveProducts =
    products.filter(product => product.price > 10000);

console.log(expensiveProducts);


// Find Product

const keyboard =
    products.find(product => product.id === 3);

console.log(keyboard);


// ======================================
// Mini Practice
// ======================================

const employees = [
    { id: 1, name: "Alice", salary: 50000 },
    { id: 2, name: "Bob", salary: 35000 },
    { id: 3, name: "Charlie", salary: 60000 },
    { id: 4, name: "David", salary: 45000 }
];

// Names
console.log(employees.map(emp => emp.name));

// Salary > 45000
console.log(employees.filter(emp => emp.salary > 45000));

// Find id 2
console.log(employees.find(emp => emp.id === 2));

// Render List
employees.map(emp => {
    console.log(`${emp.name} earns Rs.${emp.salary}`);
});


/*
========================================
🔥 Remember

let
    -> Can change value

const
    -> Cannot reassign value

=> 
    -> Arrow Function

``
    -> Template Literal

map()
    -> Transform every item
    -> Returns NEW array

filter()
    -> Keep matching items
    -> Returns NEW array

find()
    -> Returns FIRST matching item

========================================
*/