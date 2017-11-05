import { IDataSetConfiguration } from "../../IDataSetConfiguration";
import * as Helper from "../../Helper"

export var FTSEClose: IDataSetConfiguration = {
    name: "FTSE Close",
    primaryKey: "CloseDate",
    getSchema: (data) => {
        let schema = [],
            firstRow = Array.isArray(data) && data[0];

        firstRow = (typeof firstRow === 'object') ? firstRow : {};
        for (let p in firstRow) {
            if (firstRow.hasOwnProperty(p)) {
                if (p === FTSEClose.primaryKey) {
                    schema.push({ title: Helper.capitalize(p), field: p, format: "{0:dd MMMM yyyy}" });
                }
                else {
                    schema.push({ title: Helper.capitalize(p), field: p, attributes: { class: "numberColumn" }, format: '{0:0.0000}' });
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