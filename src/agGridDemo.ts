import { AvailableDatasetConfigs } from './DatasetConfigsagGrid';
import * as Helper from './Helper';
import { GridOptions } from 'ag-grid-community/dist/lib/entities/gridOptions';
import { Grid } from 'ag-grid-community/dist/lib/grid';
import { IAdaptableBlotter, IAdaptableBlotterOptions } from 'adaptableblotter/types'

export class agGridDemo  {

    private themeName = "";
    private adaptableblotter: IAdaptableBlotter
    constructor() {
        let selectedConfig = Helper.manageDomDataSetSelectAndReturnSelectDataset(AvailableDatasetConfigs)
        if (!selectedConfig) { return }
        let data: any[]
        Helper.getDataFromJson(selectedConfig.name.replace(/ /g, "") + ".json").then(json => data = json)
            .then(data => selectedConfig.manipulateInitialData(data))
            .then(() => {
                // let the grid know which columns and what data to use
                var gridOptions: GridOptions = {
                    columnDefs: selectedConfig.getSchema(data),
                    rowData: data,
                    enableSorting: true,
                    enableRangeSelection: true,
                    enableFilter: true,
                    floatingFilter: true,
                    enableColResize: true,
                    onGridReady: function () {
                        //we do it twice as sometimes when the dataset is small columns that werent visible at all will become
                        //visible and won't be autosized
                        gridOptions.columnApi.autoSizeAllColumns();
                        setTimeout(() => gridOptions.columnApi.autoSizeAllColumns(), 1);

                        gridOptions.api.addEventListener("cellEditingStopped", (params: any) => {
                            selectedConfig.ActionWhenRecordUpdatedOrEdited(params.node);
                        });

                        gridOptions.api.addEventListener("newColumnsLoaded", function (params: any) {
                            gridOptions.columnApi.autoSizeAllColumns()
                        });
                    }
                };
                var eGridDiv = document.getElementById("grid");
                new Grid(eGridDiv, gridOptions);

                //Make the data to tick every 0.5s
                setInterval(() =>
                    selectedConfig.tickData(gridOptions), 500)
                //set all the properties such as editor etc....
                selectedConfig.setGridProperties(gridOptions)

                let config: any = selectedConfig.name.replace(/ /g, "") + "Config.json";

                //create Adaptable Blotter
                let blotterId: string = (selectedConfig.name).replace(/\s/g, "")
                let blotterOptions: IAdaptableBlotterOptions = {
                   
                   
                   
                    primaryKey: selectedConfig.primaryKey,
                    vendorGrid: gridOptions,
                    userName: "Demo",
                    blotterId: blotterId
                   
                }
                this.adaptableblotter = new (<any>window).adaptableblotteraggrid.AdaptableBlotter(blotterOptions);
                //We subscribe to the AB theme change so we update the theme of the grid (only light or dark for demo)
                this.adaptableblotter.AdaptableBlotterStore.TheStore.subscribe(() => { this.ThemeChange(); });
            })
    }


    public ThemeChange() {
        if (this.themeName != this.adaptableblotter.AdaptableBlotterStore.TheStore.getState().Theme.CurrentTheme) {
            this.themeName = this.adaptableblotter.AdaptableBlotterStore.TheStore.getState().Theme.CurrentTheme;
            var container = document.getElementById("grid")
            if (this.themeName == "Dark Theme" || this.themeName == "Cyborg" || this.themeName == "Darkly" || this.themeName == "Superhero") {
                container.className = "ag-theme-dark";
            }
            else {
                container.className = "ag-theme-balham";
            }
        }

    }

}