// auth.js

// Simple authentication management system

const users = [];

// User Registration
function register(username, password) {
    if (users.find(user => user.username === username)) {
        throw new Error('User already exists');
    }
    users.push({ username, password });
    return { username }; // Return user info without password
}

// User Login
function login(username, password) {
    const user = users.find(user => user.username === username);
    if (!user || user.password !== password) {
        throw new Error('Invalid credentials');
    }
    return { message: 'Login successful', user: { username } };
}

// User Logout
function logout(username) {
    // In a real application, you would invalidate the user's session
    return { message: `User ${username} logged out successfully` };
}

// Exporting functions for external usage
module.exports = { register, login, logout };