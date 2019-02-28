var express = require('express');
var bodyParser = require('body-parser');
var mysql = require('mysql');
var app = express();

// server set up
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static('public'));

app.listen(8000, () => console.log('listening on port 8000'));

app.get('/checkout', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

var userId = 1;
app.post('/newuser', (req, res) => {
  console.log('This is happening');
  db.query(`INSERT INTO purchases (purchase_id) VALUES (${userId})`, (err, result) => {
    if (err) throw err;
    console.log('User added');
  });
  res.status(200).end();
});

app.post('/form1', (req, res) => {
  console.log('REQ.BODY FORM 1-----------------------',req.body);
  db.query(`UPDATE purchases SET name = '${req.body.name}', email = '${req.body.email}', password = '${req.body.password}' WHERE purchase_id='${userId}'`, (err, result) => {
    if (err) throw err;
    console.log('Account Information added');
  });
  res.status(200).end();
});

app.post('/form2', (req, res) => {
  console.log('REQ.BODY FORM 2-----------------------',req.body);
  db.query(`UPDATE purchases SET address1 = '${req.body.address1}', address2 = '${req.body.address2}', city = '${req.body.city}', state = '${req.body.state}', zipcode = '${req.body.zipcode}', phone = '${req.body.phone}' WHERE purchase_id='${userId}'`, (err, result) => {
    if (err) throw err;
    console.log('Shipping Information added');
  });
  res.status(200).end();
});

app.post('/form3', (req, res) => {
  console.log('REQ.BODY FORM 3-----------------------',req.body);
  db.query(`UPDATE purchases SET credit_card = '${req.body.creditCard}', expiration = '${req.body.expiration}', cvv = '${req.body.cvv}', billing_zip = '${req.body.billingZip}' WHERE purchase_id='${userId}'`, (err, result) => {
    if (err) throw err;
    console.log('Payment Information added');
  });
  res.status(200).end();
});

app.post('/purchase', (req, res) => {
  console.log('Purchased!');
  userId += 1;
  res.status(200).end();
});

// mySQL connection
var db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: ''
});

db.connect((err) => {
  if (err) throw err;
  console.log('Connected to database!');
  // If a checkout database exists, it will be replaced (deleted then created again)
    // This can be uodated once app is fully functional; won't need to keep recreating the db
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
          db.query('USE checkout', (err, result) => {
            db.query('CREATE TABLE IF NOT EXISTS purchases (purchase_id VARCHAR(6), name VARCHAR(40), email VARCHAR(50), password VARCHAR(50), address1 VARCHAR(50), address2 VARCHAR(50), city VARCHAR(25), state VARCHAR(15), zipcode VARCHAR(15), phone VARCHAR(20), credit_card VARCHAR(16), expiration VARCHAR(10), cvv VARCHAR(10), billing_zip VARCHAR(10), PRIMARY KEY (purchase_id))', (err, res) => {
              if (err) throw err;
              console.log('Purchase Table created')
            })
          })
        });
      });
    }
  });
});

