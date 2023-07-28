const express = require("express");
const mysql = require('mysql');
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
dotenv.config();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const jwt = require('jsonwebtoken');

const connection = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    port: process.env.DB_PORT
})

connection.connect((err) => {
    if(err) {
        console.log(err.message)
    }
    console.log('db ' + connection.state)
})

// app.get('/players', (req, res) => {
//     connection.query('SELECT * FROM squad', (err, result) => {
//         if(err) {
//             console.log(err)
//         }else {
//             res.send(result)
//         }
//     })
// })


app.post('/register', (req, res) => {
    const email = req.body.email
    const password = req.body.password 

    connection.query('INSERT INTO users (email, password) VALUES (?,?)',
    [email, password], (err, result) => {
        console.log(err)
    });
});

app.post('/login', (req, res) => {
    const email = req.body.email
    const password = req.body.password 

    connection.query('SELECT * FROM users WHERE email = ? AND password = ?',
    [email, password], (err, result) => {
        if(err){
            res.send({err: err})
        }

        if(result.length > 0) {
            res.send(result)
        }else {
            res.send({message: 'Wrong email/password'});
        }
    });
});

app.listen(process.env.PORT, () => console.log('app is running'));