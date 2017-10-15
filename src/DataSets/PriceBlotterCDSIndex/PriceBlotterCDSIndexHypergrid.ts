import { IDataSetConfiguration } from "../../IDataSetConfiguration";
import * as Helper from "../../Helper"
import * as HelperHypergrid from "../../HelperHypergrid"

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

        HelperHypergrid.FormatDateColumns([10, 11, 12, 13, 16], behavior)
       // HelperHypergrid.FormatDecimalColumns([2, 3, 4, 5, 6, 7, 8, 9], 4, behavior)
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