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

app.post('/form', function (req, res) {
  var textInput = JSON.parse(req.body['textInput']);
  textInput = JSONtoCSV(textInput);

  res.send(textInput);
});

//FUNCTIONS FOR CONVERTING JSON TO CSV
function JSONtoCSV (data) {
  var result = getDataColumns(data) + getColumnVals(data);
  return result;
}

function getDataColumns (data) {
  var csv = '';
  var tempHolder = [];
  for (var key in data){
    if (key !== 'children') {
      tempHolder.push(key);
    }
  }
  csv += tempHolder.join(',');
  csv += '\r\n';
  return csv;
}

function getColumnVals (data) {
  var csv = '';
  var tempHolder = [];
  for (var key in data) {
    if (key !== 'children') {
      tempHolder.push(data[key]);
    }
  }
  csv += tempHolder.join(',');
  csv += '\r\n';

  if (data.children) {
    for (var i = 0; i < data.children.length; i++) {
      csv += getColumnVals(data.children[i]);
    }
  }
  return csv;
}
