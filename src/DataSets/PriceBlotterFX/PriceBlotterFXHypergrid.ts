import { IDataSetConfiguration } from "../../IDataSetConfiguration";
import * as Helper from "../../Helper"
import * as HelperHypergrid from "../../HelperHypergrid"

export var PriceBlotterFX: IDataSetConfiguration = {
    name: "Price Blotter FX",
    primaryKey: "CurrencyPair",
    getSchema: (data) => {
        let schema = [],
            firstRow = Array.isArray(data) && data[0];

        firstRow = (typeof firstRow === 'object') ? firstRow : {};
        for (let p in firstRow) {
            if (p!="RowId" && firstRow.hasOwnProperty(p)) {
                schema.push({ name: p, header: Helper.capitalize(p) });
            }
        }
        return schema;
    },
    setGridProperties: (grid: any) => {
        let behavior = grid.behavior;

        //Only Bid Offer Spread is editable
        behavior.dataModel.getCellEditorAt = function (columnIndex: any, rowIndex: any, declaredEditorName: any, options: any) {
            let editorName = declaredEditorName;
            if (options.column.name == "BidOfferSpread") {
                editorName = 'textfield';
            }
            return grid.cellEditors.create(editorName, options);
        }
        HelperHypergrid.FormatColumns([2, 3, 4, 5, 6, 7, 8, 9, 10, 11], behavior, "fourDPFormat")
    },
    tickData: (grid: any) => {
        let numberToAdd: number = Helper.generateRandomInt(1, 2) == 1 ? -0.5 : 0.5;
        //pick a random trade in the first 30
        let row = Helper.getRandomItem(grid.behavior.getData(), 30);
        let columnName = "Price";
        let initialNewValue = row[columnName];
        let newValue = initialNewValue + numberToAdd;
        newValue = Helper.checkPriceIsPostive(newValue);
        row[columnName] = newValue;

        PriceBlotterFX.ActionWhenRecordUpdatedOrEdited(row) 

        grid.repaint()
    },
    manipulateInitialData(data: any[]) {
        Helper.MakeAllRecordsColumnsDateProperDates(data);
    },
    ActionWhenRecordUpdatedOrEdited(record:any){
       let price: any = record["Price"];
       let bidOfferSpread :any = record["BidOfferSpread"];
       let close :any = record["Close"];

       // Update Bid and Ask
        record["Bid"] = price - (bidOfferSpread / 2)
        record["Ask"] = price + (bidOfferSpread / 2)

        // Update Change
        record["Change"]=price - close

        // Check if need to change High and Low prices
        let dayHigh = record["DayHigh"]
        let dayLow = record["DayLow"];
        if (price > dayHigh) {
            record["DayHigh"]=price;
            // check yearHigh if dayHigh has changed
            let yearHigh = record["YearHigh"]
            if (price > yearHigh) {
                record["YearHigh"]= price;
            }
        }
        if (price < dayLow) {
            record["DayLow"]= price;
            // check yearLow if dayLow has changed
            let yearLow = record["YearLow"]
            if (price < yearLow) {
                record["YearLow"]= price
            }
        }
    }
}