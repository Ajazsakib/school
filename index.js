const express = require('express');
const mysql = require('mysql2');
const db = require("./config")
const app = express();

// Middleware to parse JSON bodies

app.use(express.json());


// Define a route
app.get('/', (req, res) =>
{
    res.send('Welcome to the School Management App');
});


// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
{
    console.log(`Server running on port ${PORT}`);
});