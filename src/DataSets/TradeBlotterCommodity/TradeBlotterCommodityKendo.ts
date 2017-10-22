import { IDataSetConfiguration } from "../../IDataSetConfiguration";
import * as Helper from "../../Helper"

export var TradeBlotterCommodity: IDataSetConfiguration = {
    name: "Trade Blotter Commodity",
    primaryKey: "TradeId",
    getSchema: (data) => {
        let schema = [],
            firstRow = Array.isArray(data) && data[0];

        firstRow = (typeof firstRow === 'object') ? firstRow : {};
        for (let p in firstRow) {
            if (firstRow.hasOwnProperty(p)) {
                if (p === TradeBlotterCommodity.primaryKey) {
                    schema.push({ title: Helper.capitalize(p), field: p, attributes: { class: "numberColumn" } });
                } else if (p.includes("Date")) {
                    schema.push({ title: Helper.capitalize(p), field: p, format: "{0:dd MMMM yyyy}" }  );
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