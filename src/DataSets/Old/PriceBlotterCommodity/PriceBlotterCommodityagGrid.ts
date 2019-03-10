import { IDataSetConfiguration } from "../../../IDataSetConfiguration";
import * as Helper from "../../../Helper"
import * as HelperAgGrid from "../../../HelperAgGrid"

export var PriceBlotterCommodity: IDataSetConfiguration = {
    name: "Price Blotter Commodity",
    primaryKey: "Symbol",
    // openGroupingField: "CommodityType",
    getSchema: (data) => {
        let schema = [],
            firstRow = Array.isArray(data) && data[0];

        firstRow = (typeof firstRow === 'object') ? firstRow : {};
        for (let p in firstRow) {
            if (firstRow.hasOwnProperty(p)) {
                if (p === 'RowId') {
                    // do nothing!  schema.push({ headerName: Helper.capitalize(p), field: p, cellRenderer: twoDecimalPlaceCellRenderer });
                } else if (p === "CommodityType" || p === "Symbol") { // only 2 string columns
                    schema.push({ headerName: Helper.capitalize(p), field: p, editable: false });
                } else if (p === 'BidOfferSpread') { // only editable column
                    schema.push({ headerName: Helper.capitalize(p), field: p, editable: true, cellClass: 'number-cell' });
                } else if (p === 'Volume') { // no decimal places required
                    schema.push({ headerName: Helper.capitalize(p), field: p, editable: false, cellClass: 'number-cell' });
                } else {
                    schema.push({ headerName: Helper.capitalize(p), field: p, editable: false, cellRenderer: HelperAgGrid.decimalPlaceRendereragGrid(2, 4), cellClass: 'number-cell' });
                }
            }
        }
        return schema;
    },
    setGridProperties: (grid: any) => {

    },
    tickData: (grid: any) => {
        let InstrumentId1 = Helper.generateRandomInt(0, 45);
        let InstrumentId2 = Helper.generateRandomInt(0, 45);

        grid.api.forEachNode((rowNode: any, index: number) => {
            if (rowNode.group) {
                return;
            }
            let rowId = rowNode.data['RowId'];
            if (rowId == InstrumentId1 || rowId == InstrumentId2) {

                let randomDouble: number = Helper.generateRandomDouble();
                let direction: number = Helper.generateRandomInt(1, 2)
                let numberToAdd: number = (direction == 1) ? -randomDouble : randomDouble;
                let columnName = "Price";
                let initialNewValue = grid.api.getValue(columnName, rowNode);
                let newValue = Helper.roundTo4Dp(initialNewValue + numberToAdd);
                newValue = Helper.checkPriceIsPostive(newValue);
                rowNode.setDataValue(columnName, newValue)
                PriceBlotterCommodity.ActionWhenRecordUpdatedOrEdited(rowNode)
            }
        });
    }, manipulateInitialData(data: any[]) {
        Helper.MakeAllRecordsColumnsDateProperDates(data);
    },
    ActionWhenRecordUpdatedOrEdited(record: any) {
        let price = record.gridApi.getValue("Price", record);
        let bidOfferSpread = record.gridApi.getValue("BidOfferSpread", record);
        let openPrice = record.gridApi.getValue("OpenPrice", record);

        // Update Bid and Ask based on B/O Spread
        let ask = Helper.roundTo4Dp(price + bidOfferSpread / 2);
        record.setDataValue("Ask", ask)
        let bid = Helper.roundTo4Dp(price - bidOfferSpread / 2);
        record.setDataValue("Bid", bid)

        // Update Change
        let priceChange = price - openPrice;
        record.setDataValue("Change", priceChange)

        // Update % Change
        let percentChange: number = (priceChange / openPrice) * 100;
        record.setDataValue("PercentChange", percentChange)

        // Update Year to date % Change
        let yearStart = record.gridApi.getValue("YearStart", record);
        let yearChange: number = price - yearStart
        let ytdPercentChange: number = (yearChange / yearStart) * 100;
        record.setDataValue("PercentChangeOnYear", ytdPercentChange)

        // Increment Volume by 1
        let volume = record.gridApi.getValue("Volume", record);
        volume = volume + 1;
        record.setDataValue("Volume", volume)

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