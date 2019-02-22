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
});

app.post('/', function (req, res) {
  var textInput = JSON.parse(req.body['text_input']);
  textInput = JSONtoCSV(textInput);
  console.log('Final...................', textInput);
  console.log('req.body', typeof (req.body['text_input']));
  // res.sendFile(__dirname + '/client/index.html');
  res.send(textInput);
});

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

  csv += '<br>';

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

  csv += '<br>';

  if (data.children) {
    for (var i = 0; i < data.children.length; i++) {
      csv += getColumnVals(data.children[i]);
    }
  }
  return csv;
}

// function JSONtoCSV (data) {
//   var result = getDataColumns(data) + getColumnVals(data);
//   return result
// }

// function getDataColumns (data) {
//   var csv = ''
//   for (var key in data){
//     if (key !== 'children') {
//       if (key === 'sales') {
//         csv += key;
//       } else {
//           csv += key + ','
//         }
//      }
//   }
//   // csv += '\r\n'
//   csv += '<br>'

//   return csv;
// }

// function getColumnVals (data) {
//   var csv = '';
//   for (var key in data) {
//     if (key !== 'children') {
//       if (key === 'sales') {
//         // csv += data[key] + '\r\n'
//         csv += data[key] + '<br>'
//     } else {
//         csv += data[key] + ','
//       }
//     }
//   }

//   if (data.children) {
//     for (var i = 0; i < data.children.length; i++) {
//       csv += getColumnVals(data.children[i]);
//     }
//   }
//   return csv;
// }