var xls = require('excel');
var fs = require('fs');

var dataSets = getDatasets('DataSets/');
dataSets.forEach(x => convertXlsToJson(x));

function convertXlsToJson(filename) {
  xls('./DataSets/' + filename, function(err, data) {
    if (err) throw err;
    //console.log(JSON.stringify(convertToJSON(data)));
    let json = convertToJSON(data);
    let stringifyJson = JSON.stringify(json);
    fs.writeFile(
      './DataSets/Json/' + filename.replace('.xlsx', '.json'),
      stringifyJson,
      { encoding: 'utf8' },
      function(err) {
        if (err) {
          console.error('Error saving converting xls for : ' + filename, err);
        } else {
          console.log('Xls Converted : ' + filename);
        }
      }
    );
  });
}

function convertToJSON(array) {
  var first = array[0];
  var jsonData = [];
  for (var i = 1, length = array.length; i < length; i++) {
    var data = {};
    for (var x = 0; x < array[i].length; x++) {
      //we try to convert the values to native types
      let value = array[i][x];
      if (isFinite(value) && value) {
        value = Number(value);
      }
      data[first[x]] = value;
    }
    jsonData.push(data);
  }
  return jsonData;
}

function getDatasets(srcpath) {
  return fs.readdirSync(srcpath).filter(function(file) {
    return file.indexOf('.xlsx') > -1;
  });
}
