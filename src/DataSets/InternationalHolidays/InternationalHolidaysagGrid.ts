import { IDataSetConfiguration } from "../../IDataSetConfiguration";
import * as Helper from "../../Helper"
import * as HelperAgGrid from "../../HelperAgGrid"

export var InternationalHolidays: IDataSetConfiguration = {
    name: "International Holidays",
    primaryKey: "Id",
    // openGroupingField: "Country",
    getSchema: (data) => {
        let schema = [],
            firstRow = Array.isArray(data) && data[0];

        firstRow = (typeof firstRow === 'object') ? firstRow : {};
        for (let p in firstRow) {
            if (firstRow.hasOwnProperty(p)) {
                if (p === InternationalHolidays.primaryKey) {
                    schema.push({ headerName: Helper.capitalize(p), field: p, cellClass: 'number-cell' });
                } else if (p.includes("Date")) {
                    schema.push({ headerName: Helper.capitalize(p), field: p, editable: true, cellEditorParams: { useFormatter: true }, valueParser: HelperAgGrid.dateParseragGrid, valueFormatter : HelperAgGrid.shortDateFormatteragGrid });
                } else {
                    schema.push({ headerName: Helper.capitalize(p), field: p, editable: true });
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