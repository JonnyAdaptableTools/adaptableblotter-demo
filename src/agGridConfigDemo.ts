import * as Helper from './Helper';
import { Grid } from 'ag-grid-community/dist/lib/grid';
import { GridOptions } from 'ag-grid-community/dist/lib/entities/gridOptions';
import * as HelperAgGrid from "./HelperAgGrid"
import { IAdaptableBlotter, IAdaptableBlotterOptions } from 'adaptableblotter/types'

export class agGridConfigDemo {
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
                //  let configUrl = 'src/configs/configconfig.json';
                let blotterOptions: IAdaptableBlotterOptions = HelperAgGrid.getAadaptableBlotterOptions(gridOptions, "OrderId", "Config Demo", json);
                this.adaptableblotter = new (<any>window).adaptableblotteraggrid.AdaptableBlotter(blotterOptions);
            })

        let json = {
            "ConditionalStyle": {
                "ConditionalStyles": [
                    {
                        "ColumnId": "ChangeLastOrder",
                        "Style": {
                            "BackColor": null as any,
                            "ForeColor": "#008000",
                            "FontWeight": "Normal",
                            "FontStyle": "Normal",
                            "FontSize": null as any
                        },
                        "ConditionalStyleScope": "Column",
                        "Expression": {
                            "ColumnValueExpressions": [{}],
                            "FilterExpressions": [
                                {
                                    "ColumnId": "ChangeLastOrder",
                                    "Filters": [
                                        "Positive"
                                    ]
                                }
                            ],
                            "RangeExpressions": [{}]
                        },
                        "IsReadOnly": true
                    },
                    {
                        "ColumnId": "ChangeLastOrder",
                        "Style": {
                            "BackColor": null,
                            "ForeColor": "#ff0000",
                            "FontWeight": "Normal",
                            "FontStyle": "Normal",
                            "FontSize": null
                        },
                        "ConditionalStyleScope": "Column",
                        "Expression": {
                            "ColumnValueExpressions": [],
                            "FilterExpressions": [
                                {
                                    "ColumnId": "ChangeLastOrder",
                                    "Filters": [
                                        "Negative"
                                    ]
                                }
                            ],
                            "RangeExpressions": []
                        },
                        "IsReadOnly": true
                    }
                ]
            },
            "Layout": {
                "CurrentLayout": "Orders View",
                "Layouts": [
                    {
                        "Columns": [
                            "OrderId",
                            "OrderDate",
                            "CustomerReference",
                            "CompanyName",
                            "ContactName",
                            "RequiredDate",
                            "InvoicedCost",
                            "ChangeLastOrder",
                            "OrderCost",
                            "PackageCost",
                            "ItemCost",
                            "ItemCount"
                        ],
                        "GridSorts": [],
                        "Name": "Orders View"
                    },
                    {
                        "Columns": [
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
                        "GridSorts": [
                            {
                                "Column": "ShipName",
                                "SortOrder": "Ascending"
                            }
                        ],
                        "Name": "Shipping View"
                    }
                ]
            }
        }
    }
}