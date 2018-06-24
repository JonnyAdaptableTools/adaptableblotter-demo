import { IDataSetConfiguration } from './IDataSetConfiguration';
import { AvailableDatasetConfigs } from './DatasetConfigsHypergrid';
import { IAdaptableBlotter } from '../node_modules/adaptableblotter/dist/App_Scripts/Core/Interface/IAdaptableBlotter';
import { IDemo } from './IDemo';
import * as Helper from './Helper';
import { IAdaptableBlotterOptions } from 'adaptableblotter/dist/App_Scripts/Core/Api/Interface/IAdaptableBlotterOptions';

export class HypergridDemo implements IDemo {
    private themeName = "";
    private adaptableblotter: IAdaptableBlotter
    private grid: any
    constructor(private gridContainer: string, private blotterContainer: string) {
        //Generate the dumy data
        let selectedConfig = Helper.manageDomDataSetSelectAndReturnSelectDataset(AvailableDatasetConfigs)
        if (!selectedConfig) { return }

        let data: any[]
        Helper.getDataFromJson(selectedConfig.name.replace(/ /g, "") + ".json").then(json => data = json)
            .then(data => selectedConfig.manipulateInitialData(data)).then(() => {
                //create the Hypergrid
                this.grid = new (<any>window).fin.Hypergrid('#' + gridContainer, { data: data, schema: selectedConfig.getSchema(data) });

                selectedConfig.tickData(this.grid);

                //Set to `true` to render `0` and `false`. Otherwise these value appear as blank cells.
                this.grid.addProperties({ renderFalsy: true });
                this.grid.addProperties({ editOnKeydown: false });

                this.grid.localization.add('USDCurrencyFormat', new this.grid.localization.NumberFormatter('en-US', {
                    style: 'currency',
                    currency: 'USD',
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 0
                }));

                this.grid.localization.add('twoDPFormat', new this.grid.localization.NumberFormatter('en-US', {
                    style: 'decimal',
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 2
                }));

                this.grid.localization.add('fourDPFormat', new this.grid.localization.NumberFormatter('en-US', {
                    style: 'decimal',
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 4
                }));



                var shortDateOptions = { year: 'numeric', month: 'long', day: 'numeric' };
                this.grid.localization.add('shortDateFormat', new this.grid.localization.DateFormatter('en-EN', shortDateOptions));

                var longDateOptions = { year: 'numeric', month: 'long', day: 'numeric', weekday: 'short' };
                this.grid.localization.add('longDateFormat', new this.grid.localization.DateFormatter('en-EN', longDateOptions));

                //Make the data to tick every 0.5s
                setInterval(() =>
                    selectedConfig.tickData(this.grid), 500)

                //set all the properties such as editor etc....
                selectedConfig.setGridProperties(this.grid)

                this.grid.addEventListener("fin-after-cell-edit", (e: any) => {
                    let row = this.grid.behavior.dataModel.getRow(e.detail.input.event.visibleRow.rowIndex);
                    selectedConfig.ActionWhenRecordUpdatedOrEdited(row)
                    this.grid.repaint()
                });

                let config: any = selectedConfig.name.replace(/ /g, "") + "Config.json";

                //create Adaptable Blotter
                var container = document.getElementById(blotterContainer);
                let blotterOptions: IAdaptableBlotterOptions = {
                    primaryKey: selectedConfig.primaryKey,
                    vendorGrid: this.grid,
                    userName: "Jonathan",
                    enableAuditLog: false,
                    enableRemoteConfigServer: false,
                    blotterId: selectedConfig.name + process.env.packageVersion,
                    maxColumnValueItemsDisplayed: 1000,
                    modalContainer: "Page",
                    predefinedConfig: config,
                    columnValuesOnlyInQueries: false,
                    includeVendorStateInLayouts: false,
                    iPushPullConfig: {
                        api_key: "CbBaMaoqHVifScrYwKssGnGyNkv5xHOhQVGm3cYP",
                        api_secret: "xYzE51kuHyyt9kQCvMe0tz0H2sDSjyEQcF5SOBlPQmcL9em0NqcCzyqLYj5fhpuZxQ8BiVcYl6zoOHeI6GYZj1TkUiiLVFoW3HUxiCdEUjlPS8Vl2YHUMEPD5qkLYnGj",
                    }
                }

                this.adaptableblotter = new (<any>window).adaptableblotterhypergrid.AdaptableBlotter(blotterOptions);
                this.adaptableblotter.Render();
                //alternate rows
                var origgetCell = this.grid.behavior.dataModel.getCell;
                this.grid.behavior.dataModel.getCell = function (config: any, declaredRendererName: any) {
                    if (config.isDataRow) {
                        var y = config.dataCell.y;
                        if (y % 2) {
                            config.backgroundColor = config.altbackground;
                        }
                    }
                    return origgetCell.call(this.grid.behavior.dataModel, config, declaredRendererName)
                };
                //We subscribe to the AB theme change so we update the theme of the grid (only light or dark for demo)
                this.adaptableblotter.AdaptableBlotterStore.TheStore.subscribe(() => { this.ThemeChange(); });
                this.grid.addProperties(lightTheme);
            })
    }


    public ThemeChange() {
        if (this.themeName != this.adaptableblotter.AdaptableBlotterStore.TheStore.getState().Theme.CurrentTheme) {
            this.themeName = this.adaptableblotter.AdaptableBlotterStore.TheStore.getState().Theme.CurrentTheme;
            if (this.themeName == "Dark Theme" || this.themeName == "Slate" || this.themeName == "Cyborg" || this.themeName == "Darkly" || this.themeName == "Superhero") {
                this.grid.addProperties(darkTheme);
            }
            else {
                this.grid.addProperties(lightTheme);
            }
        }
    }
}

var lightTheme = {
    font: '14px Helvetica Neue, Helvetica, Arial, sans-serif',
    color: '#003f59',
    backgroundColor: '#ffffff',
    altbackground: '#e6f2f8',
    foregroundSelectionColor: '#ffffff',
    backgroundSelectionColor: 'rgba(13, 106, 146, 0.5)',

    columnHeaderFont: '14px Helvetica Neue, Helvetica, Arial, sans-serif',
    columnHeaderColor: '#00435e',
    columnHeaderBackgroundColor: '#d9ecf5',
    columnHeaderForegroundSelectionColor: 'rgb(25, 25, 25)',
    columnHeaderBackgroundSelectionColor: 'rgb(255, 220, 97)',

    rowHeaderFont: '14px Helvetica Neue, Helvetica, Arial, sans-serif',
    rowHeaderColor: '#00435e',
    rowHeaderBackgroundColor: '#d9ecf5',
    rowHeaderForegroundSelectionColor: 'rgb(25, 25, 25)',
    rowHeaderBackgroundSelectionColor: 'rgb(255, 220, 97)',

    backgroundColor2: 'rgb(201, 201, 201)',
    lineColor: '#bbdceb',
    voffset: 0,
    scrollbarHoverOver: 'visible',
    scrollbarHoverOff: 'visible',
    scrollingEnabled: true,

    fixedRowAlign: 'center',
    fixedColAlign: 'center',
    cellPadding: 15,
    gridLinesH: false,
    gridLinesV: true,

    defaultRowHeight: 30,
    defaultFixedRowHeight: 15,
    showRowNumbers: false,
    editorActivationKeys: ['alt', 'esc'],
    columnAutosizing: true,
    readOnly: false
};

var darkTheme = {
    font: '14px Helvetica Neue, Helvetica, Arial, sans-serif',
    color: '#ffffff',
    backgroundColor: '#403E3E',
    altbackground: '#302E2E',
    foregroundSelectionColor: '#ffffff',
    backgroundSelectionColor: '#546465',

    columnHeaderFont: '14px Helvetica Neue, Helvetica, Arial, sans-serif',
    columnHeaderColor: '#ffffff',
    columnHeaderBackgroundColor: '#626262',
    columnHeaderForegroundSelectionColor: '#ffffff',
    columnHeaderBackgroundSelectionColor: '#546465',

    rowHeaderFont: '14px Helvetica Neue, Helvetica, Arial, sans-serif',
    rowHeaderColor: '#ffffff',
    rowHeaderBackgroundColor: '#07071E',
    rowHeaderForegroundSelectionColor: '#ffffff',
    rowHeaderBackgroundSelectionColor: '#3D77FE',

    backgroundColor2: 'rgb(201, 201, 201)',
    lineColor: 'rgb(199, 199, 199)',
    voffset: 0,
    scrollbarHoverOver: 'visible',
    scrollbarHoverOff: 'visible',
    scrollingEnabled: true,

    fixedRowAlign: 'center',
    fixedColAlign: 'center',
    cellPadding: 15,
    gridLinesH: false,
    gridLinesV: false,

    defaultRowHeight: 30,
    defaultFixedRowHeight: 15,
    showRowNumbers: false,
    editorActivationKeys: ['alt', 'esc'],
    columnAutosizing: true,
    readOnly: false
};