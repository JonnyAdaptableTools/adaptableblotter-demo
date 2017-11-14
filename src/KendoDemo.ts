import { IDataSetConfiguration } from './IDataSetConfiguration';
import { AvailableDatasetConfigs } from './DatasetConfigsKendo';
import { IAdaptableBlotterOptions, IAdaptableBlotter } from '../node_modules/adaptableblotter/App_Scripts/Core/Interface/IAdaptableBlotter';
import { IDemo } from './IDemo';
import * as Helper from './Helper';

export class KendoDemo implements IDemo {
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

                //create Adaptable Blotter
                var container = document.getElementById(blotterContainer);
                let blotterOptions: IAdaptableBlotterOptions = {
                    primaryKey: selectedConfig.primaryKey,
                    userName: "Jonathan",
                    enableAuditLog: false,
                    enableRemoteConfigServer: false,
                    blotterId: selectedConfig.name + process.env.packageVersion,
                    maxColumnValueItemsDisplayed: 1000,
                    predefinedConfigUrl: selectedConfig.name.replace(/ /g, "") + "Config.json"
                }
                this.adaptableblotter = new (<any>window).adaptableblotterkendo.AdaptableBlotter(
                    this.grid, 
                    container, 
                    blotterOptions);

                //We subscribe to the AB theme change so we update the theme of the grid (only light or dark for demo)
                this.adaptableblotter.AdaptableBlotterStore.TheStore.subscribe(() => { this.ThemeChange(); });
            })
    }

    public ThemeChange() {
        if (this.themeName != this.adaptableblotter.AdaptableBlotterStore.TheStore.getState().Theme.CurrentTheme) {
            this.themeName = this.adaptableblotter.AdaptableBlotterStore.TheStore.getState().Theme.CurrentTheme;
            var a_href = $('#kendotheme').attr('href');
            if (this.themeName == "Slate" || this.themeName == "Cyborg" || this.themeName == "Darkly" || this.themeName == "Superhero") {
                $('#kendotheme').attr('href', a_href.replace('blueopal', 'black'));
            }
            else {
                $('#kendotheme').attr('href', a_href.replace('black', 'blueopal'));
            }
        }
    }
}