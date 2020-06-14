const mysql = require('mysql2');
const dotenv = require('dotenv').config();

//Values from command line comes here
const values = {
    name: process.argv[2],
    age: parseInt(process.argv[3]),
    place: process.argv[4]
}

console.log(process.env.PASSWORD)

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'alien',
    database: 'testdb2',
    password: process.env.PASSWORD
});

connection.query(
    `INSERT INTO person (name,age,place)
     VALUES('${values.name}',${values.age},'${values.place}')`,
    (err,results) => {
        if(err) {
            console.log(err);
        }
        else {
            console.log(results)
            console.log("Data inserted into table successfully");
            connection.close();
        }
    }
)