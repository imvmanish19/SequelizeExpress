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
    `CREATE TABLE IF NOT EXISTS person
    (id INTEGER PRIMARY KEY AUTO_INCREMENT,
     name VARCHAR(25),
     age INTEGER NOT NULL,
     place VARCHAR(20)
    );
    `,
    (err,resuts) => {
        if(err) {
            console.log(err)
        } else {
            console.log("Table Created Successfully",resuts);
        }
        connection.close();
    }
)
// connection.close();