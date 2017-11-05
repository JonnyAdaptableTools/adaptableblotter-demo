import { IDataSetConfiguration } from "../../IDataSetConfiguration";
import * as Helper from "../../Helper"
import * as HelperHypergrid from "../../HelperHypergrid"

export var PriceBlotterBond: IDataSetConfiguration = {
    name: "Price Blotter Bond",
    primaryKey: "Isin",
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
        // we prevent Bid, Ask and price from being editable as well
        behavior.dataModel.getCellEditorAt = function (columnIndex: any, rowIndex: any, declaredEditorName: any, options: any) {
            let editorName = declaredEditorName;
            if (options.column.name == "BidOfferSpread"
                || options.column.name == "Spread") {
                editorName = 'textfield';
            }
            return grid.cellEditors.create(editorName, options);
        }
        HelperHypergrid.FormatColumns([9], behavior, "shortDateFormat")
        HelperHypergrid.FormatColumns([3, 5, 6, 8],  behavior, "fourDPFormat")
    },
    tickData: (grid: any) => {
        let numberToAdd: number = Helper.generateRandomInt(1, 2) == 1 ? -0.5 : 0.5;
        //pick a random trade in the first 30
        let row = Helper.getRandomItem(grid.behavior.getData(), 30);
        let columnName = "Price";
        let initialNewValue = row[columnName];
        let newValue = Helper.roundTo4Dp(initialNewValue + numberToAdd);
        newValue = Helper.checkPriceIsPostive(newValue);
        row[columnName] = newValue;

        PriceBlotterBond.ActionWhenRecordUpdatedOrEdited(row) 

        grid.repaint()
    },
    manipulateInitialData(data: any[]) {
        Helper.MakeAllRecordsColumnsDateProperDates(data);
    },
    ActionWhenRecordUpdatedOrEdited(record: any) {
        record["Bid"] = Helper.roundTo4Dp(record["Price"] - (record["BidOfferSpread"] / 2))
        record["Ask"] = Helper.roundTo4Dp(record["Price"] + (record["BidOfferSpread"] / 2))
    }


}

