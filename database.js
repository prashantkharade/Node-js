// const mysql = require('mysql');

// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: 'Ppk@3721',
// });

// // Create a new database
// const createDatabaseQuery = 'CREATE DATABASE IF NOT EXISTS sample_database';

// // Create a new table
// const createTableQuery = `
//   CREATE TABLE IF NOT EXISTS sample_table (
//     id INT AUTO_INCREMENT PRIMARY KEY,
//     name VARCHAR(255),
//     age INT
//   )
// `;

// connection.connect((err) => {
//   if (err) throw err;

//   console.log('Connected to MySQL server.');

//   // Create the database
//   connection.query(createDatabaseQuery, (err) => {
//     if (err) throw err;

//     console.log('Database created or already exists.');

//     // Use the database
//     connection.query('USE sample_database', (err) => {
//       if (err) throw err;

//       console.log('Using database: sample_database');

//       // Create the table
//       connection.query(createTableQuery, (err) => {
//         if (err) throw err;

//         console.log('Table created or already exists.');

//         // Close the connection
//         connection.end((err) => {
//           if (err) throw err;
//           console.log('Connection closed.');
//         });

//       });
//     });
//   });
// });

// console.log("Hello world")


// var mysql = require('mysql');

// var con = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "Ppk@3721",
  
// });

// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
// //   var sql = "CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))";
// con.query("CREATE DATABASE mydb", function (err, result){
//     if (err) throw err;
//     console.log("Table created");
//   });
// });

var mysql = require('mysql');

var con = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'Ppk@372001'
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  con.query("CREATE DATABASE mydb", function (err, result) {
    if (err) throw err;
    console.log("Database created");
  });
});