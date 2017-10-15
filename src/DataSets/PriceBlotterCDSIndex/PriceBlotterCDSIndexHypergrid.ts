import { IDataSetConfiguration } from "../../IDataSetConfiguration";
import * as Helper from "../../Helper"

export var PriceBlotterCDSIndex: IDataSetConfiguration = {
    name: "Price Blotter CDSIndex",
    primaryKey: "REDCode",
    getSchema: (data) => {
        let schema = [],
            firstRow = Array.isArray(data) && data[0];

        firstRow = (typeof firstRow === 'object') ? firstRow : {};
        for (let p in firstRow) {
            if (firstRow.hasOwnProperty(p)) {
                schema.push({ name: p, header: Helper.capitalize(p) });
            }
        }
        return schema;
    },
    setGridProperties: (grid: any) => {
        let behavior = grid.behavior;

        //For all columns except primarykey we enable the editor
        behavior.dataModel.getCellEditorAt = function (columnIndex: any, rowIndex: any, declaredEditorName: any, options: any) {
            let editorName = declaredEditorName;
            if (options.column.name !== PriceBlotterCDSIndex.primaryKey) {
                editorName = 'textfield';
            }
            return grid.cellEditors.create(editorName, options);
        }

          // // Add format for Maturity and Updated Date column
          behavior.setColumnProperties(10, {
            format: 'shortDateFormat'
        });
          behavior.setColumnProperties(11, {
            format: 'shortDateFormat'
        });
          behavior.setColumnProperties(12, {
            format: 'shortDateFormat'
        });
          behavior.setColumnProperties(13, {
            format: 'shortDateFormat'
        });
          behavior.setColumnProperties(16, {
            format: 'shortDateFormat'
        });
    },
    tickData: (grid: any) => {

    },
    manipulateInitialData(data: any[]) {
        Helper.MakeAllRecordsColumnsDateProperDates(data);
        MakeMaturityColumnsProperDates(data);        
    },
    ActionWhenRecordUpdatedOrEdited(record:any){
        
    }
}


function MakeMaturityColumnsProperDates(data: any[]) {
    data.forEach(record => {
        for (let prop in record) {
            if (record.hasOwnProperty(prop) && prop.match(/Maturity/i)) {
                record[prop] = Helper.ConvertExcelDate(record[prop]);
            }
        }
    });
}