require('dotenv').config(); // Load environment variables from .env

document.addEventListener('DOMContentLoaded', () => {
    // Access environment variables
    const userPoolId = process.env.POOLID;
    const userPoolClientId = process.env.CLIENTID;
    const invokeUrl = process.env.URL;

    // Use the variables in your application logic
    // ...
});
