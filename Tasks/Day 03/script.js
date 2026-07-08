// script.js

const button = document.getElementById('fetchBtn');
const list = document.getElementById('userList');

async function loadUsers() {
    try {
        list.innerHTML = 'Loading...';

        const response = await fetch('https://jsonplaceholder.typicode.com/users');

        const users = await response.json();

        list.innerHTML = '';

        users.forEach(user => {
            const li = document.createElement('li');
            li.textContent = user.name;
            list.appendChild(li);
        });

    } catch (error) {
        console.error('Something went wrong:', error);
        list.innerHTML = 'Failed to load users.';
    }
}

button.addEventListener('click', loadUsers);