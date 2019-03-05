import * as Helper from './Helper';
import { Grid } from 'ag-grid-community/dist/lib/grid';
import { GridOptions } from 'ag-grid-community/dist/lib/entities/gridOptions';
import * as HelperAgGrid from "./HelperAgGrid"
import { IAdaptableBlotter, IAdaptableBlotterOptions } from 'adaptableblotter/types'

export class agGridWorldStatsChartingDemo {
    private adaptableblotter: IAdaptableBlotter
    constructor() {

        let data: any[]
        Helper.getDataFromJson("worldstats.json").then(json => data = json)
            .then(data => Helper.MakeAllRecordsColumnsDateProperDates(data)).then(() => {

                var columndefs = HelperAgGrid.getWorldStatsSchema();
                var gridOptions = HelperAgGrid.getGridOptions(columndefs, data);
              var eGridDiv = document.getElementById("grid");
                let grid = new Grid(eGridDiv, gridOptions);
                let configUrl = 'src/configs/worldstatscharts.json';
                let blotterOptions: IAdaptableBlotterOptions = HelperAgGrid.getAadaptableBlotterOptions(gridOptions, "Country", "World Stats Charting Demo", configUrl);
                this.adaptableblotter = new (<any>window).adaptableblotteraggrid.AdaptableBlotter(blotterOptions);
            })


    }
}

/*

ChartProperties: {ChartType: "Column", SeriesThickness: 1, MarkerType: "Default", CalloutsType: "None",…}




*/