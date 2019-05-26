import { IDataSetConfiguration } from "../../../old/IDataSetConfiguration";
import * as Helper from "../../../Helper"
import * as HelperAgGrid from "../../../HelperAgGrid"

export var PriceBlotterBond: IDataSetConfiguration = {
    name: "Price Blotter Bond",
    primaryKey: "Isin",
    // openGroupingField: "Country",
    getSchema: (data) => {
        let schema = [],
            firstRow = Array.isArray(data) && data[0];

        firstRow = (typeof firstRow === 'object') ? firstRow : {};
        for (let p in firstRow) {
            if (firstRow.hasOwnProperty(p)) {
                if (p === PriceBlotterBond.primaryKey) {
                    schema.push({ headerName: Helper.capitalize(p), field: p });
                } else if (p === 'Price' || p === 'Bid' || p === 'Ask') {
                    schema.push({ headerName: Helper.capitalize(p), field: p, cellClass: 'number-cell', cellRenderer: HelperAgGrid.decimalPlaceRendereragGrid(2, 4) });
                } else if (p === 'Coupon' || p === 'Depth') {
                    schema.push({ headerName: Helper.capitalize(p), field: p, editable: false, cellClass: 'number-cell' });
                } else if (p.includes("Date")) {
                } else if (p === 'BidOfferSpread' || p === 'Spread') {
                    schema.push({ headerName: Helper.capitalize(p), field: p, editable: true, cellClass: 'number-cell' });
                } else if (p.includes("Date")) {
                    schema.push({ headerName: Helper.capitalize(p), field: p, editable: false, cellEditorParams: { useFormatter: true }, valueParser: HelperAgGrid.dateParseragGrid, valueFormatter: HelperAgGrid.shortDateFormatteragGrid });
                } else if (p === 'RowId') {
                    // do nothing
                } else {
                    schema.push({ headerName: Helper.capitalize(p), field: p, editable: false });
                }
            }
        }
        return schema;
    },
    setGridProperties: (grid: any) => {

    },
    tickData: (grid: any) => {
        let InstrumentId1 = Helper.generateRandomInt(0, 100);
        let InstrumentId2 = Helper.generateRandomInt(0, 100);


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
                newValue = Helper.checkPriceIsPostive(newValue);
                rowNode.setDataValue(columnName, newValue)
                PriceBlotterBond.ActionWhenRecordUpdatedOrEdited(rowNode)
            }
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
