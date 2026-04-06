// frontend/script.js

// Function to handle login
function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Basic validation
    if (!username || !password) {
        alert('Please enter your username and password.');
        return;
    }

    // Placeholder for actual authentication logic (e.g., API call)
    console.log('Logging in with username: ', username);
    // Simulate login success
    alert(`Welcome, ${username}!`);
}

// Attach login function to login button
document.getElementById('loginButton').addEventListener('click', login);