import { IDataSetConfiguration } from "../../IDataSetConfiguration";
import * as Helper from "../../Helper"

export var NorthwindOrders: IDataSetConfiguration = {
    name: "Northwind Orders",
    primaryKey: "OrderID",
    getSchema: (data) => {
        let schema = [],
            firstRow = Array.isArray(data) && data[0];

        firstRow = (typeof firstRow === 'object') ? firstRow : {};
        for (let p in firstRow) {
            if (firstRow.hasOwnProperty(p)) {
                if (p === NorthwindOrders.primaryKey) {
                    schema.push({ headerName: Helper.capitalize(p), field: p, cellClass: 'number-cell' });
                }
                else {
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
    ActionWhenRecordUpdatedOrEdited(record:any){
        
    }
}