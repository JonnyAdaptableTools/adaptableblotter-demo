import { IDataSetConfiguration } from "../../IDataSetConfiguration";
import * as Helper from "../../Helper"

export var TradeBlotterBond: IDataSetConfiguration = {
    name: "Trade Blotter Bond",
    primaryKey: "TradeId",
    getSchema: (data) => {
        let schema = [],
            firstRow = Array.isArray(data) && data[0];

        firstRow = (typeof firstRow === 'object') ? firstRow : {};
        for (let p in firstRow) {
            if (firstRow.hasOwnProperty(p)) {
                if (p === TradeBlotterBond.primaryKey) {
                    schema.push({ title: Helper.capitalize(p), field: p, attributes: { class: "numberColumn" } });
                }
                else if (p === 'Notional') {
                    schema.push({ title: Helper.capitalize(p), field: p, attributes: { class: "numberColumn" }, format: "{0:c0}" });
                }
                else if (p === 'TradeDate' || p === 'EffectiveDate' || p === 'MaturityDate') {
                    schema.push({ title: Helper.capitalize(p), field: p, format: "{0:dd MMM yyyy}" });
                }
                else {
                    schema.push({ title: Helper.capitalize(p), field: p });
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