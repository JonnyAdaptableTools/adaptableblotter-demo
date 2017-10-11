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
                    schema.push({ headerName: Helper.capitalize(p), field: p, cellClass: 'number-cell', editable: false });
                }
                else if (p === 'Close' ||p === 'Change' || p === 'Price'|| p === 'Bid' || p === 'Ask'|| p === 'YearHigh'|| p === 'DayHigh'|| p === 'YearLow'|| p === 'DayLow') {
                    schema.push({ headerName: Helper.capitalize(p), field: p, cellRenderer: decimalPlaceCellRenderer, editable: false });
                }
                else if (p === 'RowId') {
                    // do nothing!  schema.push({ headerName: Helper.capitalize(p), field: p, cellRenderer: twoDecimalPlaceCellRenderer });
                }
                else if (p === 'BidOfferSpread') { // only editable column
                    schema.push({ headerName: Helper.capitalize(p), field: p, editable: true });
                }
                else {
                    schema.push({ headerName: Helper.capitalize(p), field: p, editable: false });
                }
            }
        }
        return schema;
    },
    setGridProperties: (grid: any) => {

    },
    tickData: (grid: any) => {
        let InstrumentId1 = Helper.generateRandomInt(0, 51);
        let InstrumentId2 = Helper.generateRandomInt(0, 51);

        grid.api.forEachNode((rowNode: any, index: number) => {
            if (rowNode.group) {
                return;
            }
            let rowId = rowNode.data['RowId'];
            if (rowId == InstrumentId1 || rowId == InstrumentId2) {

                let numberToAdd: number = Helper.generateRandomInt(1, 2) == 1 ? -0.5 : 0.5;
                let columnName = "Price";
                let initialNewValue = grid.api.getValue(columnName, rowNode);
                let newValue = Helper.roundTo4Dp(initialNewValue + numberToAdd);
                rowNode.setDataValue(columnName, newValue)
                PriceBlotterFX.ActionWhenRecordUpdatedOrEdited(rowNode)
            }
        });
    },
    manipulateInitialData(data: any[]) {
        Helper.MakeAllRecordsColumnsDateProperDates(data);
    },
    ActionWhenRecordUpdatedOrEdited(record: any) {
        let price = record.gridApi.getValue("Price", record);
        let bidOfferSpread = record.gridApi.getValue("BidOfferSpread", record);
        let close = record.gridApi.getValue("Close", record);

        // Update Bid and Ask based on B/O Spread
        let ask = Helper.roundTo4Dp(price + bidOfferSpread / 2);
        record.setDataValue("Ask", ask)
        let bid = Helper.roundTo4Dp(price - bidOfferSpread / 2);
        record.setDataValue("Bid", bid)

        // Update Change
        let change = price - close;
        record.setDataValue("Change", change)

        // Check if need to change High and Low prices
        let dayHigh = record.gridApi.getValue("DayHigh", record);
        let dayLow = record.gridApi.getValue("DayLow", record);
        if (price > dayHigh) {
            record.setDataValue("DayHigh", price)
            // check yearHigh if dayHigh has changed
            let yearHigh = record.gridApi.getValue("YearHigh", record);
            if (price > yearHigh) {
                record.setDataValue("YearHigh", price)
            }
        }
        if (price < dayLow) {
            record.setDataValue("DayLow", price)
            // check yearLow if dayLow has changed
            let yearLow = record.gridApi.getValue("YearLow", record);
            if (price < yearLow) {
                record.setDataValue("YearLow", price)
            }
        }
    }
}


var decimalPlaceFormatter = new Intl.NumberFormat('en-GB', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 4
});

function decimalPlaceCellRenderer(params: any) {
    if (params.value) {
        return decimalPlaceFormatter.format(params.value)
    } else {
        return null;
    }
}