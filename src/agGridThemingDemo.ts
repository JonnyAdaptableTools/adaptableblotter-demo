import * as Helper from './Helper';
import { Grid } from 'ag-grid-community/dist/lib/grid';
import { GridOptions } from 'ag-grid-community/dist/lib/entities/gridOptions';
import * as HelperAgGrid from "./HelperAgGrid"
import { IAdaptableBlotter, IAdaptableBlotterOptions } from 'adaptableblotter/types'

export class agGridThemingDemo {
    private adaptableblotter: IAdaptableBlotter
    constructor() {


        let data: any[]
        Helper.getDataFromJson("NorthwindOrders.json").then(json => data = json)
            .then(data => Helper.MakeAllRecordsColumnsDateProperDates(data)).then(() => {
                var columndefs = HelperAgGrid.getBasicNorthwindColumnSchema();
                var gridOptions = HelperAgGrid.getGridOptions(columndefs, data);
                var eGridDiv = document.getElementById("grid");
                let grid = new Grid(eGridDiv, gridOptions);
                // HelperAgGrid.startTickingDataagGrid(gridOptions);
                let configUrl = 'src/configs/themeconfig.json';
                let blotterOptions: IAdaptableBlotterOptions = HelperAgGrid.getAadaptableBlotterOptions(gridOptions, "OrderId", "Theming Demo", json);
                this.adaptableblotter = new (<any>window).adaptableblotteraggrid.AdaptableBlotter(blotterOptions);
            })
    }
}

let json = {
    Theme: {
        CurrentTheme: "Dark Theme"
    },
    Dashboard: {
        VisibleToolbars: [
            "SmartEdit",
            "Export",
            "BulkUpdate"
        ],
        VisibleButtons: [
            "About",
            "Dashboard",
            "QuickSearch",
            "ColumnChooser",
            "AdvancedSearch"
        ],
        Zoom: "0.9",
        UseSingleColourForButtons: true,
        DashboardVisibility: "Minimised",
        ShowSystemStatusButton: false
    },
    Layout: {
        CurrentLayout: "Orders View",
        Layouts: [
            {
                Columns: [
                    "OrderId",
                    "OrderDate",
                    "CustomerReference",
                    "CompanyName",
                    "ContactName",
                    "RequiredDate",
                    "InvoicedCost",
                    "OrderCost",
                    "PackageCost",
                    "ItemCost",
                    "ItemCount",
                    "ChangeLastOrder"
                ],
                GridSorts: [],
                Name: "Orders View"
            },
            {
                Columns: [
                    "OrderId",
                    "ShipVia",
                    "Freight",
                    "ShipName",
                    "ShipAddress",
                    "ShipCity",
                    "ShipCountry",
                    "ShippedDate",
                    "CustomerReference"
                ],
                GridSorts: [
                    {
                        "Column": "ShipName",
                        "SortOrder": "Ascending"
                    }
                ],
                Name: "Shipping View"
            }
        ]
    }

}

