import { IDataSetConfiguration } from "../../../old/IDataSetConfiguration";
import * as Helper from "../../../Helper"
import * as HelperAgGrid from "../../../HelperAgGrid"

export var TradeBlotterBond: IDataSetConfiguration = {
    name: "Trade Blotter Bond",
    primaryKey: "TradeId",
    // openGroupingField: "Counterparty",
    getSchema: (data) => {
        let schema = [],
            firstRow = Array.isArray(data) && data[0];

        firstRow = (typeof firstRow === 'object') ? firstRow : {};
        for (let p in firstRow) {
            if (firstRow.hasOwnProperty(p)) {
                if (p === TradeBlotterBond.primaryKey) {
                    schema.push({ headerName: Helper.capitalize(p), field: p, cellClass: 'number-cell' });
                } else if (p.includes("Date")) {
                    schema.push({ headerName: Helper.capitalize(p), field: p, editable: true, cellEditorParams: { useFormatter: true }, valueParser: HelperAgGrid.dateParseragGrid, valueFormatter: HelperAgGrid.shortDateFormatteragGrid });
                } else if (p.includes('TradedAt') || p.includes('Coupon') || p === 'Notional') {
                    schema.push({ headerName: Helper.capitalize(p), field: p, editable: true, cellClass: 'number-cell' });
                } else if (p.includes('Notional')){
                    schema.push({ headerName: Helper.capitalize(p), field: p, editable: true, cellClass: 'number-cell', cellRenderer: HelperAgGrid.decimalPlaceRendereragGrid(2, 2) });
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
        // record.MaturityDate = Helper.ConvertExcelDate(record.MaturityDate);
    },
    ActionWhenRecordUpdatedOrEdited(record: any) {

    }
}