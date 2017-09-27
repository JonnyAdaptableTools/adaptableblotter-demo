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
                if (p === PriceBlotterBond.primaryKey) {
                    schema.push({ headerName: Helper.capitalize(p), field: p, cellClass: 'number-cell' });
                }
                else if (p === 'Price' || p === 'Bid' || p === 'Ask') {
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
            let rowTradeId = grid.api.getValue(PriceBlotterBond.primaryKey, rowNode);
            // only do first 30
            if (rowTradeId != InstrumentId) { return; }

            let numberToAdd: number = Helper.generateRandomInt(1, 2) == 1 ? -0.5 : 0.5;
            let columnName = "Price";
            let initialNewValue = grid.api.getValue(columnName, rowNode);
            let newValue = Helper.roundTo4Dp(initialNewValue + numberToAdd);
            rowNode.setDataValue(columnName, newValue)
            PriceBlotterBond.ActionWhenRecordUpdatedOrEdited(rowNode)
        });
    },
    manipulateInitialData(data: any[]) {
        Helper.MakeAllRecordsColumnsDateProperDates(data);
    },
    ActionWhenRecordUpdatedOrEdited(record: any) {
        let ask = Helper.roundTo4Dp(record.gridApi.getValue("Price", record) + record.gridApi.getValue("BidOfferSpread", record) / 2);
        record.setDataValue("Ask", ask)
        let bid = Helper.roundTo4Dp(record.gridApi.getValue("Price", record) - record.gridApi.getValue("BidOfferSpread", record) / 2);
        record.setDataValue("Bid", bid)
    }
}