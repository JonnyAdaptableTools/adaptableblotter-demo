import { IDataSetConfiguration } from './IDataSetConfiguration';
import { AvailableDatasetConfigs } from './DatasetConfigsHypergrid';
import { IAdaptableBlotterOptions, IAdaptableBlotter } from '../node_modules/adaptableblotter/App_Scripts/Core/Interface/IAdaptableBlotter';
import { IDemo } from './IDemo';
import * as Helper from './Helper';

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
                //Set to `true` to render `0` and `false`. Otherwise these value appear as blank cells
                this.grid.addProperties({ renderFalsy: true });

                this.grid.localization.add('USDCurrencyFormat', new this.grid.localization.NumberFormatter('en-US', {
                    style: 'currency',
                    currency: 'USD',
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 0
                }));

                var shortDateOptions = { year: 'numeric', month: 'long', day: 'numeric' };
                this.grid.localization.add('shortDateFormat', new this.grid.localization.DateFormatter('en-EN', shortDateOptions));

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

                //create Adaptable Blotter
                var container = document.getElementById(blotterContainer);
                let blotterOptions: IAdaptableBlotterOptions = {
                    primaryKey: selectedConfig.primaryKey,
                    userName: "Jonathan",
                    enableAuditLog: false,
                    enableRemoteConfigServer: false,
                    blotterId: selectedConfig.name,
                    maxColumnValueItemsDisplayed: 1000,
                    predefinedConfigUrl : selectedConfig.name.replace(/ /g, "") + "Config.json"
                }
                //tradeId is the primary for the datasource
                //Jonathan is the username for the demo. Can be plugged to an authent service if required
                this.adaptableblotter = new (<any>window).adaptableblotterhypergrid.AdaptableBlotter(
                    this.grid,
                    container,
                    blotterOptions
                );
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
            if (this.themeName == "Slate" || this.themeName == "Cyborg" || this.themeName == "Darkly" || this.themeName == "Superhero") {
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
    backgroundColor: 'white',
    altbackground: '#e6f2f8',
    foregroundSelectionColor: 'white',
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
    color: 'white',
    backgroundColor: '#07071E',
    altbackground: '#07071E',
    foregroundSelectionColor: 'white',
    backgroundSelectionColor: 'rgba(61, 119, 254, 0.5)',

    columnHeaderFont: '14px Helvetica Neue, Helvetica, Arial, sans-serif',
    columnHeaderColor: 'white',
    columnHeaderBackgroundColor: '#07071E',
    columnHeaderForegroundSelectionColor: 'white',
    columnHeaderBackgroundSelectionColor: '#3D77FE',

    rowHeaderFont: '14px Helvetica Neue, Helvetica, Arial, sans-serif',
    rowHeaderColor: 'white',
    rowHeaderBackgroundColor: '#07071E',
    rowHeaderForegroundSelectionColor: 'white',
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