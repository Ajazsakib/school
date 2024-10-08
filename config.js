const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',      // Replace with your MySQL username
    password: '',      // Replace with your MySQL password
    database: 'school' // Replace with your database name
});


// Connect to the database
db.connect((err) =>
{
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }
    console.log('Connected to MySQL');
});

module.exports = db;