//const fs = require('fs');
const excelToJson = require('convert-excel-to-json');

export class ExcelReader {
  public ReadExcel(filename: string): string {
    alert(filename);
    let data = excelToJson({
      sourceFile: filename,
    });

    //console.log(data);

    let json: any[] = this.convertToBlotterJSON(data);
    let stringifyJson: string = JSON.stringify(json);
    return stringifyJson;
  }

  private convertToBlotterJSON(data: any): any[] {
    var jsonData: any[] = [];

    let sheetNames = Object.keys(data); // legitimate assumption as every workbook must have one sheet...

    // for now ONLY looking at first sheet...
    let sheet1Data = data[sheetNames[0]];

    // get the first row - which we will treat as the Header Row
    var headerRow = sheet1Data[0];
    if (!headerRow) {
      return jsonData;
    }

    let colKeys = Object.keys(headerRow);
    let colNames = Object.values(headerRow);

    var dataRowCount = sheet1Data.length;
    var colNamesLength = colNames.length;

    for (var i = 1; i < dataRowCount; i++) {
      var returnData = {};

      for (var x = 0; x < colNamesLength; x++) {
        let currentColKey = colKeys[x];
        let currentColName: any = colNames[x];
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
}
