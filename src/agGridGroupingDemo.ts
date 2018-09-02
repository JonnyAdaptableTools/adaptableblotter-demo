import { IDemo } from './IDemo';
import * as Helper from './Helper';
import { Grid } from 'ag-grid/dist/lib/grid';
import { GridOptions } from 'ag-grid/dist/lib/entities/gridOptions';
import * as HelperAgGrid from "./HelperAgGrid"
import { IAdaptableBlotter, IAdaptableBlotterOptions } from 'adaptableblotter/types'

export class agGridGroupingDemo implements IDemo {
    private themeName = "";
    private adaptableblotter: IAdaptableBlotter
    constructor(private gridContainer: string) {

        let data: any[]
        Helper.getDataFromJson("NorthwindOrders.json").then(json => data = json)
            .then(data => Helper.MakeAllRecordsColumnsDateProperDates(data)).then(() => {
                var schema = []

                // do a column group for Customer
                schema.push({
                    headerName: "Customer Info",
                    marryChildren: true,
                    children: [
                        { headerName: "Customer Reference", field: "CustomerReference", columnGroupShow: 'open', editable: true, },
                        { headerName: "Company Name", field: "CompanyName", columnGroupShow: 'closed', editable: true, },
                        { headerName: "Contact Name", field: "ContactName", columnGroupShow: 'closed', },
                    ]
                })

                // do a column group for Order
                schema.push({
                    headerName: "Order",
                    marryChildren: true,
                    children: [
                        { headerName: "Order Id", field: "OrderId", editable: false, columnGroupShow: 'open', cellClass: 'number-cell' },
                        { headerName: "Order Date", field: "OrderDate", editable: true, columnGroupShow: 'closed', cellEditorParams: { useFormatter: true }, valueParser: HelperAgGrid.dateParseragGrid, valueFormatter: HelperAgGrid.shortDateFormatteragGrid },
                        { headerName: "Required Date", field: "RequiredDate", editable: true, columnGroupShow: 'closed', cellEditorParams: { useFormatter: true }, valueParser: HelperAgGrid.dateParseragGrid, valueFormatter: HelperAgGrid.shortDateFormatteragGrid },
                        { headerName: "Shipped Date", field: "ShippedDate", editable: true, columnGroupShow: 'closed', cellEditorParams: { useFormatter: true }, valueParser: HelperAgGrid.dateParseragGrid, valueFormatter: HelperAgGrid.shortDateFormatteragGrid },
                        { headerName: "OrderCost", field: "OrderCost", cellClass: 'number-cell', cellRenderer: HelperAgGrid.currencyRendereragGrid, columnGroupShow: 'closed', editable: true, enableValue: true },
                    ]
                })
                schema.push({ headerName: "Item Count", field: "ItemCount", cellClass: 'number-cell', columnGroupShow: 'closed', editable: false, enableValue: true });
                schema.push({ headerName: "Employee", field: "Employee", filter: 'text', editable: true, enableRowGroup: true, hide: true });
                schema.push({ headerName: "Ship Via", field: "ShipVia", filter: 'text', editable: true, enableRowGroup: true, hide: true });
                schema.push({ headerName: "Freight", field: "Freight", cellClass: 'number-cell', cellRenderer: HelperAgGrid.currencyRendereragGrid, editable: false, enableValue: true });

                // do a column group for shipping
                schema.push({
                    headerName: "Shipping Details",
                    children: [
                        { headerName: "Ship Name", field: "ShipName", columnGroupShow: 'open', editable: true, },
                        { headerName: "Ship Address", field: "ShipAddress", columnGroupShow: 'closed', editable: true, },
                        { headerName: "Ship City", field: "ShipCity", columnGroupShow: 'closed', },
                        { headerName: "Ship Postal Code", field: "ShipPostalCode", columnGroupShow: 'closed', },
                    ]
                })


                schema.push({ headerName: "Ship Country", field: "ShipCountry", filter: 'text', editable: true, rowGroup: true, enableRowGroup: true, hide: true });


                // let the grid know which columns and what data to use
                var gridOptions: GridOptions = {
                    columnDefs: schema,
                    rowData: data,
                    enableSorting: true,
                    animateRows: true,
                    enableRangeSelection: true,
                    enableFilter: true,
                    groupMultiAutoColumn: false, // setting it to false until we fix issue: 209
                    groupUseEntireRow: false,
                    enableColResize: true,
                    onGridReady: function () {
                        //we do it twice as sometimes when the dataset is small columns that werent visible at all will become
                        //visible and won't be autosized
                        gridOptions.columnApi.autoSizeAllColumns();
                        setTimeout(() => gridOptions.columnApi.autoSizeAllColumns(), 1);

                        gridOptions.api.addEventListener("cellEditingStopped", () => {
                        });

                        gridOptions.api.addEventListener("newColumnsLoaded", function () {
                            gridOptions.columnApi.autoSizeAllColumns();
                        });
                    }
                };
                var eGridDiv = document.getElementById(gridContainer);
                new Grid(eGridDiv, gridOptions);

                //set all the properties such as editor etc....
                //  selectedConfig.setGridProperties(gridOptions)

                let config: any = "NorthwindOrdersConfig.json";

                //create Adaptable Blotter
                let blotterOptions: IAdaptableBlotterOptions = {
                    primaryKey: "OrderId",
                    vendorGrid: gridOptions,
                    userName: "Jonathan",
                    enableAuditLog: false,
                    enableRemoteConfigServer: false,
                    blotterId: "Northwind Orders" + process.env.packageVersion,
                    modalContainer: "Page",
                    maxColumnValueItemsDisplayed: 1000,
                    predefinedConfig: config,
                    columnValuesOnlyInQueries: false,
                    includeVendorStateInLayouts: false,
                    getColumnValues: null
                }
                this.adaptableblotter = new (<any>window).adaptableblotteraggrid.AdaptableBlotter(blotterOptions);

                //We subscribe to the AB theme change so we update the theme of the grid (only light or dark for demo)
                this.adaptableblotter.AdaptableBlotterStore.TheStore.subscribe(() => { this.ThemeChange(); });
            })
    }


    public ThemeChange() {
        if (this.themeName != this.adaptableblotter.AdaptableBlotterStore.TheStore.getState().Theme.CurrentTheme) {
            this.themeName = this.adaptableblotter.AdaptableBlotterStore.TheStore.getState().Theme.CurrentTheme;
            var container = document.getElementById(this.gridContainer)
            if (this.themeName == "Dark Theme" || this.themeName == "Slate" || this.themeName == "Cyborg" || this.themeName == "Darkly" || this.themeName == "Superhero") {
                container.className = "ag-theme-dark";
            }
            else {
                container.className = "ag-theme-balham";
            }
        }
    }
}