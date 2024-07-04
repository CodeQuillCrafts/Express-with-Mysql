const mysql = require('mysql');
require('dotenv').config();

// creating mysql connection
const db = mysql.createConnection({
    host: process.env.HOST || 'localhost',
    user: process.env.USER || 'root',
    password: process.env.PASSWORD || '',
});

// connecting to mysql
db.connect((err) => {
    if (err) {
        console.error('Unable to connect with mysql:', err);
        return;
    }
    console.log(`Connected to mysql`);

    // creating and connecting to the database
    db.query(`CREATE DATABASE IF NOT EXISTS ${process.env.DATABASE_NAME || 'taskDB'}`, (err) => {
        if (err) {
            console.error('Unable to connect with database:', err);
            return;
        }
        console.log(`Connected to the database`);

        // use that database after successful creation
        db.query(`USE ${process.env.DATABASE_NAME || 'taskDB'}`, (err) => {
            if (err) {
                console.error(`Unable to use database: ${process.env.DATABASE_NAME || 'taskDB'}`, err);
                return;
            }
            console.log(`Using database: ${process.env.DATABASE_NAME || 'taskDB'}`);

            // creating tables if not exists
            db.query(`CREATE TABLE IF NOT EXISTS ${process.env.TABLE_NAME || 'taskTable'} (
                id INT AUTO_INCREMENT PRIMARY KEY,
                parent_id INT,
                company_id INT,
                event_name VARCHAR(255),
                label_color VARCHAR(50),
                location VARCHAR(255),
                description TEXT,
                start_date_time DATETIME,
                end_date_time DATETIME,
                host VARCHAR(255),
                status VARCHAR(50),
                note TEXT,
                \`repeat\` TINYINT,
                repeat_every INT,
                repeat_cycles INT,
                repeat_type VARCHAR(50),
                send_reminder TINYINT,
                remind_time INT,
                remind_type VARCHAR(50),
                event_link VARCHAR(255),
                added_by INT,
                last_updated_by INT,
                event_id INT,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
            )`, (err) => {
                if (err) {
                    console.error(`Unable to create table: ${process.env.TABLE_NAME || 'taskTable'}`, err);
                    return;
                }

                console.log(`Table Created: ${process.env.TABLE_NAME || 'taskTable'}`);
            });
        });
    });
});

module.exports = db;

// const mysql = require('mysql');
// require('dotenv').config();

// // creating mysql connection
// const db = mysql.createConnection({
//     host: process.env.HOST || 'localhost',
//     user: process.env.USER || 'root',
//     password: process.env.PASSWORD || '',
// });

// // connecting to mysql
// db.connect((err) => {
//     if (err) {
//         console.error('Unable to connect with mysql:', err);
//         return;
//     }
//     console.log(`Connected to mysql`);

//     // creating and connecting to the database
//     db.query(`CREATE DATABASE IF NOT EXISTS ${process.env.DATABASE_NAME || 'taskDB'}`, (err) => {
//         if (err) {
//             console.error('Unable to connect with database:', err);
//             return;
//         }
//         console.log(`Connected to the database`);

//         // use that database after successful creation
//         db.query(`USE ${process.env.DATABASE_NAME || 'taskDB'}`, (err) => {
//             if (err) {
//                 console.error(`Unable to use database: ${process.env.DATABASE_NAME || 'taskDB'}`, err);
//                 return;
//             }
//             console.log(`Using database: ${process.env.DATABASE_NAME || 'taskDB'}`);

//             // creating tables if not exists
//             db.query(`CREATE TABLE IF NOT EXISTS ${process.env.TABLE_NAME || 'taskTable'} (
//                 id INT AUTO_INCREMENT PRIMARY KEY,
//                 username VARCHAR(100) NOT NULL,
//                 password VARCHAR(255) NOT NULL
//             )`, (err) => {
//                 if (err) {
//                     console.error(`Unable to create table: ${process.env.TABLE_NAME || 'taskTable'}`, err);
//                     return;
//                 }

//                 console.log(`Table Created: ${process.env.TABLE_NAME || 'taskTable'}`);
//             });
//         });
//     });
// });

// module.exports = db;