import { IDataSetConfiguration } from "../../IDataSetConfiguration";
import * as Helper from "../../Helper"
import * as HelperHypergrid from "../../HelperHypergrid"

export var PriceBlotterCommodity: IDataSetConfiguration = {
    name: "Price Blotter Commodity",
    primaryKey: "Symbol",
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

        //For all columns except primarykey we enable the editor
        behavior.dataModel.getCellEditorAt = function (columnIndex: any, rowIndex: any, declaredEditorName: any, options: any) {
            let editorName = declaredEditorName;
            if (options.column.name !== PriceBlotterCommodity.primaryKey) {
                editorName = 'textfield';
            }
            return grid.cellEditors.create(editorName, options);
        }

        HelperHypergrid.FormatColumns([ 3, 4, 5, 6, 7, 8, 10,11, 12, 13, 14, 15], behavior, "fourDPFormat")
    },
    tickData: (grid: any) => {
        let randomDouble: number = Helper.generateRandomDouble();
        let direction: number = Helper.generateRandomInt(1, 2)
        let numberToAdd: number = (direction == 1) ? -randomDouble : randomDouble;
        //pick a random trade in the first 30
        let row = Helper.getRandomItem(grid.behavior.getData(), 45);
        let columnName = "Price";
        let initialNewValue = row[columnName];
        let newValue = initialNewValue + numberToAdd;
        newValue = Helper.checkPriceIsPostive(newValue);
        row[columnName] = newValue;

        PriceBlotterCommodity.ActionWhenRecordUpdatedOrEdited(row) 

        grid.repaint()
    },
    manipulateInitialData(data: any[]) {
        Helper.MakeAllRecordsColumnsDateProperDates(data);
    },
    ActionWhenRecordUpdatedOrEdited(record:any){
        let price: any = record["Price"];
        let bidOfferSpread :any = record["BidOfferSpread"];
        let close :any = record["Close"];
        let openPrice = record["OpenPrice"];
        
        // Update Bid and Ask
         record["Bid"] = price - (bidOfferSpread / 2)
         record["Ask"] = price + (bidOfferSpread / 2)
 
         // Update Change
         let priceChange = price - openPrice;
         record["Change"]= priceChange
 
         // Update % Change
         let percentChange: number = (priceChange / openPrice) * 100;
         record["PercentChange"]= percentChange
 
         // Update Year to date % Change
         let yearStart = record["YearStart"];
         let yearChange: number = price - yearStart
         let ytdPercentChange: number = (yearChange / yearStart) * 100;
         record["PercentChangeOnYear"]= ytdPercentChange
 
         // Increment Volume by 1
         let volume = record["Volume"];
         volume = volume + 1;
         record["Volume"]= volume;
 
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