import { IDataSetConfiguration } from "../../IDataSetConfiguration";
import * as Helper from "../../Helper"
import * as HelperAgGrid from "../../HelperAgGrid"

export var PriceBlotterCDSIndex: IDataSetConfiguration = {
    name: "Price Blotter CDSIndex",
    primaryKey: "RedCode",
    getSchema: (data) => {
        let schema = [],
            firstRow = Array.isArray(data) && data[0];

        firstRow = (typeof firstRow === 'object') ? firstRow : {};
        for (let p in firstRow) {
            if (firstRow.hasOwnProperty(p)) {
                if (p === PriceBlotterCDSIndex.primaryKey) {
                    schema.push({ headerName: Helper.capitalize(p), field: p, cellClass: 'number-cell' });
                } else if (p.includes("Date")) {
                    schema.push({ headerName: Helper.capitalize(p), field: p, editable: false, cellEditorParams: { useFormatter: true }, valueParser: HelperAgGrid.dateParseragGrid, valueFormatter : HelperAgGrid.shortDateFormatteragGrid });
                } else if (p === "OnTheRun") {
                    schema.push({ headerName: Helper.capitalize(p), field: p, editable: false, cellRenderer: HelperAgGrid.boolParseragGrid, cellClass: 'bool-cell' });
                } else if (p.includes('Series') || p.includes('Markit') || p.includes('Spread') ) {
                    schema.push({ headerName: Helper.capitalize(p), field: p, editable: false, cellClass: 'number-cell' });
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