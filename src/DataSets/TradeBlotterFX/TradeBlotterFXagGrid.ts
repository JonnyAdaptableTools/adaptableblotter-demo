import { IDataSetConfiguration } from "../../IDataSetConfiguration";
import * as Helper from "../../Helper"
import * as HelperAgGrid from "../../HelperAgGrid"

export var TradeBlotterFX: IDataSetConfiguration = {
    name: "Trade Blotter FX",
    primaryKey: "TradeId",
    groupingField: "Counterparty",
    getSchema: (data) => {
        let schema = [],
            firstRow = Array.isArray(data) && data[0];

        firstRow = (typeof firstRow === 'object') ? firstRow : {};
        for (let p in firstRow) {
            if (firstRow.hasOwnProperty(p)) {
                if (p === TradeBlotterFX.primaryKey) {
                    schema.push({ headerName: Helper.capitalize(p), field: p, editable: false,cellClass: 'number-cell' });
                } else if (p.includes('Amount')||p==='Rate') {
                    schema.push({ headerName: Helper.capitalize(p), field: p, editable: true,cellClass: 'number-cell' });
                } else if (p==='PnL') {
                    schema.push({ headerName: Helper.capitalize(p), field: p, editable: true, cellRenderer: HelperAgGrid.decimalPlaceRendereragGrid(2,4), cellClass: 'number-cell' });
                } else if (p.includes("Date")) {
                    schema.push({ headerName: Helper.capitalize(p), field: p, editable: true, cellEditorParams: { useFormatter: true }, valueParser: HelperAgGrid.dateParseragGrid, valueFormatter : HelperAgGrid.shortDateFormatteragGrid });
                } else {
                    schema.push({ headerName: Helper.capitalize(p), field: p, editable: true });
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