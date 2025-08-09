/**
 * Adds two numbers together.
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} The sum
 */
function add(a, b) {
    return a + b;
}

/**
 * Represents a user.
 * @typedef {Object} User
 * @property {string} id - Unique identifier
 * @property {string} name - The user's name
 * @property {number} age - The user's age
 */

/**
 * Logs user info.
 * @param {User} user - The user to log
 */
function logUser(user) {
    console.log(`${user.name} (${user.age})`);
}

/**
 * @type {User}
 */
const bob = {
    id: '123',
    name: 'Bob',
    age: 30,
};

logUser(bob);

// Type error: `add("1", 2)` would be caught by TypeScript in an IDE or CLI
