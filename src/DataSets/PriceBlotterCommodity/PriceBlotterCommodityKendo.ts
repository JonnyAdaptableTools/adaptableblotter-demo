import { IDataSetConfiguration } from "../../IDataSetConfiguration";
import * as Helper from "../../Helper"
import * as HelperKendo from "../../HelperKendo"


export var PriceBlotterCommodity: IDataSetConfiguration = {
    name: "Price Blotter Commodity",
    primaryKey: "Symbol",
    getSchema: (data) => {
        let schema = [],
            firstRow = Array.isArray(data) && data[0];

        firstRow = (typeof firstRow === 'object') ? firstRow : {};
        for (let p in firstRow) {
            if (firstRow.hasOwnProperty(p)) {
                if (p === PriceBlotterCommodity.primaryKey) {
                    schema.push({ title: Helper.capitalize(p), field: p });
                } else if (p === 'RowId') {
                    // do nothing
                } else if (p === 'Price' || p === 'Change' || p.startsWith('Day') || p.startsWith('Year') || p.startsWith('Percent')) {
                    schema.push({ title: Helper.capitalize(p), field: p, attributes: { class: "numberColumn" }, format: '{0:0.0000}' });
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