/*****************************************************************
                    MERN DAY 03 CHEAT SHEET
        Async JavaScript • Promise • Fetch API • Axios
******************************************************************/

//=====================================================
// 1. Synchronous JavaScript
//=====================================================

console.log("Start");
console.log("Middle");
console.log("End");

// Output:
// Start
// Middle
// End



//=====================================================
// 2. Asynchronous JavaScript
//=====================================================

console.log("Start");

setTimeout(() => {
    console.log("After 2 Seconds");
}, 2000);

console.log("End");

// Output:
// Start
// End
// After 2 Seconds



//=====================================================
// 3. Creating a Promise
//=====================================================

const promise = new Promise((resolve, reject) => {

    let success = true;

    if (success) {
        resolve("Success!");
    } else {
        reject("Something went wrong!");
    }

});



//=====================================================
// 4. Using .then()
//=====================================================

promise.then((result) => {
    console.log(result);
});



//=====================================================
// 5. Using .catch()
//=====================================================

promise
.then((result) => {
    console.log(result);
})
.catch((error) => {
    console.log(error);
});



//=====================================================
// 6. Using .finally()
//=====================================================

promise
.then((result) => console.log(result))
.catch((error) => console.log(error))
.finally(() => {
    console.log("Finished");
});



//=====================================================
// 7. async Function
//=====================================================

async function hello() {
    return "Hello";
}

hello().then(console.log);



//=====================================================
// 8. await Example
//=====================================================

function delay() {

    return new Promise(resolve => {

        setTimeout(() => {
            resolve("Done!");
        }, 2000);

    });

}

async function run() {

    const result = await delay();

    console.log(result);

}

run();



//=====================================================
// 9. try...catch
//=====================================================

async function getData() {

    try {

        console.log("Loading...");

    } catch (error) {

        console.log(error);

    }

}



//=====================================================
// 10. Fetch API (GET)
//=====================================================

async function getUsers() {

    const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
    );

    const users = await response.json();

    console.log(users);

}

getUsers();



//=====================================================
// 11. Fetch API with try...catch
//=====================================================

async function loadUsers() {

    try {

        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );

        const users = await response.json();

        console.log(users);

    } catch (error) {

        console.log("Error:", error);

    }

}



//=====================================================
// 12. Fetch One User
//=====================================================

async function getOneUser() {

    const response = await fetch(
        "https://jsonplaceholder.typicode.com/users/1"
    );

    const user = await response.json();

    console.log(user);

}



//=====================================================
// 13. Display API Data
//=====================================================

async function displayUsers() {

    const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
    );

    const users = await response.json();

    users.forEach(user => {

        console.log(user.name);

    });

}



//=====================================================
// 14. Create HTML Elements
//=====================================================

const ul = document.getElementById("users");

users.forEach(user => {

    const li = document.createElement("li");

    li.textContent = user.name;

    ul.appendChild(li);

});



//=====================================================
// 15. Loading Message
//=====================================================

const status = document.getElementById("status");

status.textContent = "Loading...";

// fetch data...

status.textContent = "Done";



//=====================================================
// 16. Axios Installation
//=====================================================

// npm install axios



//=====================================================
// 17. Import Axios
//=====================================================

import axios from "axios";



//=====================================================
// 18. Axios GET Request
//=====================================================

import axios from "axios";

async function getUsers() {

    const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
    );

    console.log(response.data);

}



//=====================================================
// 19. Fetch vs Axios
//=====================================================

// Fetch

const response = await fetch(url);

const data = await response.json();


// Axios

const response = await axios.get(url);

const data = response.data;



//=====================================================
// 20. Public APIs
//=====================================================

// Users
https://jsonplaceholder.typicode.com/users

// Posts
https://jsonplaceholder.typicode.com/posts

// Todos
https://jsonplaceholder.typicode.com/todos

// Dog Images
https://dog.ceo/api/breeds/image/random

// Random Joke
https://official-joke-api.appspot.com/random_joke



//=====================================================
// 21. Common Array Methods After Fetch
//=====================================================

users.forEach(user => console.log(user.name));

const names = users.map(user => user.name);

const firstFive = users.slice(0, 5);

const findUser = users.find(user => user.id === 3);

const gmailUsers = users.filter(user =>
    user.email.includes(".biz")
);



//=====================================================
// 22. Promise States
//=====================================================

// Pending
// Fulfilled
// Rejected



//=====================================================
// 23. Common HTTP Methods
//=====================================================

// GET    -> Read data
// POST   -> Create data
// PUT    -> Update all
// PATCH  -> Update part
// DELETE -> Delete data



//=====================================================
// 24. JSON Conversion
//=====================================================

// Object -> JSON

const json = JSON.stringify({
    name: "Dilvan"
});

// JSON -> Object

const obj = JSON.parse(json);



//=====================================================
// 25. Complete Example
//=====================================================

async function loadUsers() {

    try {

        console.log("Loading...");

        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );

        const users = await response.json();

        users.forEach(user => {

            console.log(user.name);

        });

        console.log("Finished");

    } catch (error) {

        console.log(error);

    }

}

loadUsers();