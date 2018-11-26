import { IDataSetConfiguration } from './IDataSetConfiguration';
import { AvailableDatasetConfigs } from './DatasetConfigsKendo';
import * as Helper from './Helper';
import { IAdaptableBlotter, IAdaptableBlotterOptions } from 'adaptableblotter/types'
// Note this is not currently used because we are re-doing Kendo when its more up to date
export class KendoDemo  {
    private themeName = "";
    private adaptableblotter: IAdaptableBlotter
    private grid: any
    constructor(private gridContainer: string, private blotterContainer: string) {
        let selectedConfig = Helper.manageDomDataSetSelectAndReturnSelectDataset(AvailableDatasetConfigs)
        if (!selectedConfig) { return }
        let data: any[]
        Helper.getDataFromJson(selectedConfig.name.replace(/ /g, "") + ".json").then(json => data = json)
            .then(data => selectedConfig.manipulateInitialData(data)).then(() => {
                // let the grid know which columns and what data to use
                $("#" + gridContainer)
                    .kendoGrid({
                        dataSource: {
                            data: data,
                        },
                        columns: selectedConfig.getSchema(data),
                        selectable: "multiple cell",
                        sortable: true,
                        reorderable: true,
                        navigatable: true,
                        resizable: true,
                        scrollable: false,
                        filterable: true,
                        editable: true,
                        columnMenu: false,
                    });

                this.grid = $("#" + gridContainer).data("kendoGrid");

                //Make the data to tick every 0.5s
                setInterval(() =>
                    selectedConfig.tickData(this.grid), 500)
                //set all the properties such as editor etc....
                selectedConfig.setGridProperties(this.grid)

                let config: any = selectedConfig.name.replace(/ /g, "") + "Config.json";
                let blotterId: string = (selectedConfig.name).replace(/\s/g, "")
               
                //create Adaptable Blotter
                 let blotterOptions: IAdaptableBlotterOptions = {
                    primaryKey: selectedConfig.primaryKey,
                    vendorGrid: this.grid,
                     userName: "Jonathan",
                    enableAuditLog: false,
                    enableRemoteConfigServer: false,
                    blotterId: blotterId,
                    modalContainer: "Page",
                    maxColumnValueItemsDisplayed: 1000,
                    predefinedConfig: config,
                    columnValuesOnlyInQueries: false,
                    includeVendorStateInLayouts: false,
                    getColumnValues: null,
                    useDefaultVendorGridThemes: true,
                    iPushPullConfig: {
                        api_key: "CbBaMaoqHVifScrYwKssGnGyNkv5xHOhQVGm3cYP",
                        api_secret: "xYzE51kuHyyt9kQCvMe0tz0H2sDSjyEQcF5SOBlPQmcL9em0NqcCzyqLYj5fhpuZxQ8BiVcYl6zoOHeI6GYZj1TkUiiLVFoW3HUxiCdEUjlPS8Vl2YHUMEPD5qkLYnGj",
                    }
                }
                this.adaptableblotter = new (<any>window).adaptableblotterkendo.AdaptableBlotter(blotterOptions);
               
                //We subscribe to the AB theme change so we update the theme of the grid (only light or dark for demo)
                this.adaptableblotter.AdaptableBlotterStore.TheStore.subscribe(() => { this.ThemeChange(); });
            })
    }

    public ThemeChange() {
        if (this.themeName != this.adaptableblotter.AdaptableBlotterStore.TheStore.getState().Theme.CurrentTheme) {
            this.themeName = this.adaptableblotter.AdaptableBlotterStore.TheStore.getState().Theme.CurrentTheme;
            var a_href = $('#kendotheme').attr('href');
            if (this.themeName == "Dark Theme" ) {
                $('#kendotheme').attr('href', a_href.replace('blueopal', 'black'));
            }
            else {
                $('#kendotheme').attr('href', a_href.replace('black', 'blueopal'));
            }

            //  this.adaptableblotter.api.setDataSource()
        }
    }
}