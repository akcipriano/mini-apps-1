// FUNCTIONS FOR CONVERTING JSON TO CSV
var JSONtoCSV = (data) => {
  var result = getDataColumns(data) + getColumnVals(data);
  return result;
}
// For the column names
var getDataColumns = (data) => {
  var csv = '';
  var tempHolder = [];

  Object.keys(data).forEach(key => {
    if (key !== 'children') {
      tempHolder.push(key);
    }
  });
  csv += tempHolder.join(',');
  csv += '\r\n';

  return csv;
}
// For the column values
var getColumnVals = (data) => {
  var csv = '';
  var tempHolder = [];

  Object.keys(data).forEach(key => {
    if (key !== 'children') {
      tempHolder.push(data[key]);
    }
  });
  csv += tempHolder.join(',');
  csv += '\r\n';

  if (data.children) {
    data.children.forEach(child => {
      csv += getColumnVals(child);
    });
  }
  return csv;
}

module.exports = {
  JSONtoCSV: JSONtoCSV
}