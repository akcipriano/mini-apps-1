// The server must flatten the JSON hierarchy, mapping each item/object in the JSON to a single line of CSV report (see included sample output),
//  where the keys of the JSON objects will be the columns of the CSV report.
// You may assume the JSON data has a regular structure and hierarchy (see included sample file).
//  In other words, all sibling records at a particular level of the hierarchy will have the same set of properties,
//  but child objects might not contain the same properties. In all cases, every property you encounter must be present in the final CSV output.
// You may also assume that child records in the JSON will always be in a property called `children`.
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(express.static('client'));

app.listen(3000, console.log('listening on port 3000'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/client/index.html');
  console.log('RES', res)
  console.log('REQ', req)
})

app.post('/', function (req, res) {
  console.log('POST RES', res)
  console.log('POST REQ', req)
  console.log('req.body', req.body);
  res.sendFile(__dirname + '/client/index.html');
})