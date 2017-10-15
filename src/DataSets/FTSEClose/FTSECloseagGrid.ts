import { IDataSetConfiguration } from "../../IDataSetConfiguration";
import * as Helper from "../../Helper"
import * as HelperAgGrid from "../../HelperAgGrid"

export var FTSEClose: IDataSetConfiguration = {
    name: "FTSE Close",
    primaryKey: "CloseDate",
    getSchema: (data) => {
        let schema = [],
            firstRow = Array.isArray(data) && data[0];

        firstRow = (typeof firstRow === 'object') ? firstRow : {};
        for (let p in firstRow) {
            if (firstRow.hasOwnProperty(p)) {
                if (p === FTSEClose.primaryKey) {  // for FTSE the close date is a primary key and a date!
                    schema.push({ headerName: Helper.capitalize(p), field: p, editable: false, valueParser: HelperAgGrid.dateParseragGrid, valueGetter: HelperAgGrid.shortDateRendereragGrid(p) });
                }
                else if (p === 'ChangeOnDay' || p === 'DaySpread' ) {
                    schema.push({ headerName: Helper.capitalize(p), field: p, cellClass: 'number-cell', cellRenderer: HelperAgGrid.decimalPlaceRendereragGrid(2,4),  editable: false });
                }
             else {
                    schema.push({ headerName: Helper.capitalize(p), field: p, cellClass: 'number-cell',  editable: false });
                }
            }
        }
        return schema;
    },
    setGridProperties: (grid: any) => {

    },
    tickData: (grid: any) => {

    },
    manipulateInitialData(data: any[]) {
        Helper.MakeAllRecordsColumnsDateProperDates(data);
    },
    ActionWhenRecordUpdatedOrEdited(record: any) {

    }
}
