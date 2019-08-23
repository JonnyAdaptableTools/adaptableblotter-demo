var fs = require('fs');
const excelToJson = require('convert-excel-to-json');

var path = 'DataSets/';
var dataSets = getDatasets(path);

dataSets.forEach(x => convertXlsToJson(x));

function convertXlsToJson(filename) {
  let data = excelToJson({
    sourceFile: path + filename,
  });

  //console.log(data);

  let json = convertToJSON(data);
  let stringifyJson = JSON.stringify(json);
  fs.writeFile(
    './' + path + 'Json/' + filename.replace('.xlsx', '.json'),
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
}

function convertToJSON(data) {
  var jsonData = [];

  let sheetNames = Object.keys(data); // legitimate assumption as every workbook must have one sheet...

  // for now ONLY looking at first sheet...
  let sheet1Data = data[sheetNames[0]];

  // get the first row - which we will treat as the Header Row
  var firstRow = sheet1Data[0];
  if (!firstRow) {
    return jsonData;
  }

  let colKeys = Object.keys(firstRow);
  let colNames = Object.values(firstRow);

  var dataRowCount = sheet1Data.length;
  var colNamesLength = colNames.length;

  for (var i = 1; i < dataRowCount; i++) {
    var returnData = {};

    for (var x = 0; x < colNamesLength; x++) {
      let currentColKey = colKeys[x];
      let currentColName = colNames[x];
      let value = sheet1Data[i][currentColKey];

      if (isFinite(value) && value) {
        value = Number(value);
      }

      returnData[currentColName] = value == undefined ? null : value; // doing this as if its undefined, then nothing is in the JSON for key or value, so I think null is better?
    }
    jsonData.push(returnData);
  }
  return jsonData;
}

function getDatasets(srcpath) {
  return fs.readdirSync(srcpath).filter(function(file) {
    return file.indexOf('.xlsx') > -1;
  });
}
