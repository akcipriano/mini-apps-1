var convert = require('./converter');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(express.static('client'));

app.listen(3000, console.log('listening on port 3000'));

app.get('/form', (req, res) => {
  res.sendFile(__dirname + '/client/index.html');
});

app.post('/form', (req, res) => {
  var textInput = JSON.parse(req.body['textInput']);
  textInput = convert.JSONtoCSV(textInput);

  res.send(textInput);
});