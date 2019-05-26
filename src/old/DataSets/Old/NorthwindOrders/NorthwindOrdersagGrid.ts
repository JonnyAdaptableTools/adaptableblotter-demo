import { IDataSetConfiguration } from "../../../old/IDataSetConfiguration";
import * as Helper from "../../../Helper"
import * as HelperAgGrid from "../../../HelperAgGrid"


export var NorthwindOrders: IDataSetConfiguration = {
    name: "Northwind Orders",
    primaryKey: "OrderId",
    // openGroupingField: "OrderId",
  //  availableGroupingFields:["Employee", "ShipVia", "ShipCountry"],
  //   columnGroupInfos:[{groupName: "Pricing", openChildren:["CustomerReference",  "ContactName", "CompanyName"], closedChildren:[]}],
  //   columnGroupInfos:[{groupName: "Pricing", openChildren:["CustomerReference",  "ContactName", "CompanyName"], closedChildren:[]}],
// add ship in a minute

    
    getSchema: (data) => {
        let schema = [],
            firstRow = Array.isArray(data) && data[0];

        firstRow = (typeof firstRow === 'object') ? firstRow : {};
        for (let p in firstRow) {
            if (firstRow.hasOwnProperty(p)) {
                if (p === NorthwindOrders.primaryKey) {
                    schema.push({ headerName: Helper.capitalize(p), field: p, cellClass: 'number-cell', filter: true, sortable: true  });
                }      else if (p.includes("Date")) {
                    schema.push({ headerName: Helper.capitalize(p), field: p, editable: true, cellEditorParams: { useFormatter: true }, valueParser: HelperAgGrid.dateParseragGrid, valueFormatter : HelperAgGrid.shortDateFormatteragGrid, filter: true, sortable: true  });
                 } else {
                    schema.push({ headerName: Helper.capitalize(p), field: p, editable: true, filter: true, sortable: true });
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