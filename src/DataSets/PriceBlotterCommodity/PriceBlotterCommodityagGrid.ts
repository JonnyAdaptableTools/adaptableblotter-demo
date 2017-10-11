import { IDataSetConfiguration } from "../../IDataSetConfiguration";
import * as Helper from "../../Helper"
import * as HelperAgGrid from "../../HelperAgGrid"

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
                    schema.push({ headerName: Helper.capitalize(p), field: p });
                } else if (p.includes("CommodityType")) {
                    schema.push({ headerName: Helper.capitalize(p), field: p, editable: true });
                } else {
                    schema.push({ headerName: Helper.capitalize(p), field: p, editable: true, cellClass: 'number-cell' });
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