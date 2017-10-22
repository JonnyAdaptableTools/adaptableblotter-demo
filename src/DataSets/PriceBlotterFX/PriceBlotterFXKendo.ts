import { IDataSetConfiguration } from "../../IDataSetConfiguration";
import * as Helper from "../../Helper"

export var PriceBlotterFX: IDataSetConfiguration = {
    name: "Price Blotter FX",
    primaryKey: "CurrencyPair",
    getSchema: (data) => {
        let schema = [],
            firstRow = Array.isArray(data) && data[0];

        firstRow = (typeof firstRow === 'object') ? firstRow : {};
        for (let p in firstRow) {
            if (firstRow.hasOwnProperty(p)) {
                if (p === PriceBlotterFX.primaryKey) {
                    schema.push({ title: Helper.capitalize(p), field: p });
                }
                else if (p === 'RowId') {
                    // do nothing!  schema.push({ headerName: Helper.capitalize(p), field: p, cellRenderer: twoDecimalPlaceCellRenderer });
                } else if (p === 'BidOfferSpread') { // only editable column
                    schema.push({ title: Helper.capitalize(p), field: p, editable: false, attributes: { class: "numberColumn" } , format: '{0:0.00}'});
                } else if (p === "Type") {
                    schema.push({ title: "Helper.capitalize(p)", field: p, editable: false });
                } else {
                    schema.push({ title: Helper.capitalize(p), field: p, editable: false, attributes: { class: "numberColumn" }, format: '{0:0.0000}' });
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