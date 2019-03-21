import * as Helper from './Helper';
import { Grid } from 'ag-grid-community/dist/lib/grid';
import { GridOptions } from 'ag-grid-community/dist/lib/entities/gridOptions';
import * as HelperAgGrid from "./HelperAgGrid"
import { IAdaptableBlotter, IAdaptableBlotterOptions } from 'adaptableblotter/types'

export class agGridGroupingDemo {
    private adaptableblotter: IAdaptableBlotter
    constructor() {
        let data: any[]
        Helper.getDataFromJson("NorthwindOrders.json").then(json => data = json)
            .then(data => Helper.MakeAllRecordsColumnsDateProperDates(data)).then(() => {
                HelperAgGrid.setUpAgGridLicence();
                  var columndefs = HelperAgGrid.getGroupingNorthwindColumnSchema();
                var gridOptions = HelperAgGrid.getGridOptions(columndefs, data);
                var eGridDiv = document.getElementById("grid");
                let grid = new Grid(eGridDiv, gridOptions);
                // HelperAgGrid.startTickingDataagGrid(gridOptions);
                let configUrl = 'src/configs/groupingconfig.json';
                let blotterOptions: IAdaptableBlotterOptions = HelperAgGrid.getAadaptableBlotterOptions(gridOptions,"OrderId",  "Grouping Demo", configUrl);
                   this.adaptableblotter = new (<any>window).adaptableblotteraggrid.AdaptableBlotter(blotterOptions);

            })
    }

}
