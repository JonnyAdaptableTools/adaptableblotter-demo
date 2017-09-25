import { IDataSetConfiguration } from "../../IDataSetConfiguration";
import * as Helper from "../../Helper"

export var PriceBlotterBond: IDataSetConfiguration = {
    name: "Price Blotter Bond",
    primaryKey: "InstrumentId",
    getSchema: (data) => {
        let schema = [],
            firstRow = Array.isArray(data) && data[0];

        firstRow = (typeof firstRow === 'object') ? firstRow : {};
        for (let p in firstRow) {
            if (firstRow.hasOwnProperty(p)) {
                if (p === 'InstrumentId') {
                    schema.push({ headerName: Helper.capitalize(p), field: p, cellClass: 'number-cell' });
                }
                else {
                    schema.push({ headerName: Helper.capitalize(p), field: p, editable: true });
                }
            }
        }
        return schema;
    },
    setGridProperties: (grid: any) => {

    },
    tickData: (grid: any) => {
        let InstrumentId = Helper.generateRandomInt(0, 29);
        grid.api.forEachNode((rowNode: any, index: number) => {
            if (rowNode.group) {
                return;
            }
            let rowTradeId = grid.api.getValue("InstrumentId", rowNode);
            // only do first 30
            if (rowTradeId != InstrumentId) { return; }

            let numberToAdd: number = Helper.generateRandomInt(1, 2) == 1 ? -0.5 : 0.5;
            let trade = rowNode;
            let columnName = "Price";
            let initialNewValue = grid.api.getValue(columnName, trade);
            let newValue = Helper.roundTo4Dp(initialNewValue + numberToAdd);
            trade.setDataValue(columnName, newValue)
        });
    },
    manipulateInitialData(data: any[]) {
        Helper.MakeAllRecordsColumnsDateProperDates(data);
    }
}