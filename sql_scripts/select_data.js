const mysql = require('mysql2');
const dotenv = require('dotenv').config();

console.log(process.env.PASSWORD)
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'alien',
    database: 'testdb2',
    password: process.env.PASSWORD
});


connection.query(
    `SELECT * FROM person;
    `,
    (err,rows,cols) => {
        if(err) {
            console.log(err)
        } else {
            console.log("Table Created Successfully",rows);
            console.log("Columns",cols)
        }
        connection.close();
    }
)
// connection.close();