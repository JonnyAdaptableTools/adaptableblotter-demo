import { IDataSetConfiguration } from "../../IDataSetConfiguration";
import * as Helper from "../../Helper"

export var InternationalHolidays: IDataSetConfiguration = {
    name: "International Holidays",
    primaryKey: "Id",
    getSchema: (data) => {
        let schema = [],
            firstRow = Array.isArray(data) && data[0];

        firstRow = (typeof firstRow === 'object') ? firstRow : {};
        for (let p in firstRow) {
            if (firstRow.hasOwnProperty(p)) {
                if (p === InternationalHolidays.primaryKey) {
                    schema.push({ title: Helper.capitalize(p), field: p, attributes: { class: "numberColumn" } });
                } else if (p.includes("Date")) {
                    schema.push({ title: Helper.capitalize(p), field: p, format: "{0:dddd, dd MMMM yyyy}" });
                } else {
                    schema.push({ title: Helper.capitalize(p), field: p });
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