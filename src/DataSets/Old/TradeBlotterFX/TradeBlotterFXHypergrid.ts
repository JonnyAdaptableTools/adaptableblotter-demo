import { IDataSetConfiguration } from "../../../old/IDataSetConfiguration";
import * as Helper from "../../../Helper"
import * as HelperHypergrid from "../../../HelperHypergrid"

export var TradeBlotterFX: IDataSetConfiguration = {
    name: "Trade Blotter FX",
    primaryKey: "TradeId",
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
            if (options.column.name !== TradeBlotterFX.primaryKey) {
                editorName = 'textfield';
            }
            return grid.cellEditors.create(editorName, options);
        }
        HelperHypergrid.FormatColumns([1, 2, 11], behavior, "shortDateFormat")
        HelperHypergrid.FormatColumns([9],  behavior, "fourDPFormat")    
        HelperHypergrid.FormatColumns([5, 7], behavior, "twoDPFormat")
    },
    tickData: (grid: any) => {

    },
    manipulateInitialData(data: any[]) {
        Helper.MakeAllRecordsColumnsDateProperDates(data);
    },
    ActionWhenRecordUpdatedOrEdited(record:any){
        
    }
}