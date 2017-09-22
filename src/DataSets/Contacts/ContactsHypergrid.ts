import { IDataSetConfiguration } from "../../IDataSetConfiguration";
import * as Helper from "../../Helper"

export var Contacts: IDataSetConfiguration = {
    name: "Contacts",
    primaryKey: "ID",
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
            if (options.column.name !== "ID") {
                editorName = 'textfield';
            }
            return grid.cellEditors.create(editorName, options);
        }
    },
    tickData: (grid: any) => {

    },
    manipulateInitialDate(data: any[]) {
        Helper.MakeAllRecordsColumnsDateProperDates(data);
    }
}