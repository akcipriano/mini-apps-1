// FUNCTIONS FOR CONVERTING JSON TO CSV
var JSONtoCSV = function (data) {
  var result = getDataColumns(data) + getColumnVals(data);
  return result;
}
// For the column names
var getDataColumns = function (data) {
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
// For the column values
var getColumnVals = function (data) {
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

module.exports = {
  JSONtoCSV: JSONtoCSV
}