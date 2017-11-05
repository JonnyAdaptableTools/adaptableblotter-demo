import { IDataSetConfiguration } from "../../IDataSetConfiguration";
import * as Helper from "../../Helper"

export var TradeBlotterFX: IDataSetConfiguration = {
    name: "Trade Blotter FX",
    primaryKey: "TradeId",
    getSchema: (data) => {
        let schema = [],
            firstRow = Array.isArray(data) && data[0];

        firstRow = (typeof firstRow === 'object') ? firstRow : {};
        for (let p in firstRow) {
            if (firstRow.hasOwnProperty(p)) {
                if (p === TradeBlotterFX.primaryKey) {
                   schema.push({ title: Helper.capitalize(p), field: p, attributes: { class: "numberColumn" } });
                } else if (p==="TradeDate" || p==='EffectiveDate') {
                    schema.push({ title: Helper.capitalize(p), field: p, format: "{0:dd MMMM yyyy}" }  );
                } else if (p.includes("Date")) { // no idea why maturity data cannot appear - weird! something to do with blanks?
                //    schema.push({ title: Helper.capitalize(p), field: p });
                } else if (p.includes('Amount')||p==='Rate') {
                    schema.push({ title: Helper.capitalize(p), field: p,  attributes: { class: "numberColumn" } });
                }else {
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
    },
    ActionWhenRecordUpdatedOrEdited(record:any){
        
    }
}

