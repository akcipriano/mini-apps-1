var express = require('express');
var bodyParser = require('body-parser');
var mysql = require('mysql');
var app = express();

var db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: ''
});

db.connect((err) => {
  if (err) throw err;
  console.log('Connected to database!');
  // If a checkout database exists, it will be replaced (deleted then created again)
  db.query('USE checkout', (err, result) => {
    if (err) {
      db.query('CREATE DATABASE checkout', (err, result) => {
        if (err) throw err;
        console.log('Checkout database created');
      });
    } else {
      db.query('DROP DATABASE checkout', (err, result) => {
        if (err) throw err;
        console.log('Previous Checkout database deleted')
        db.query('CREATE DATABASE checkout', (err, result) => {
          if (err) throw err;
          console.log('New Checkout database created');
        });
      });
    }
  });
});

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static('public'));

app.listen(8000, () => console.log('listening on port 8000'));