import * as Helper from '../Helper';
import { Grid } from 'ag-grid-community/dist/lib/grid';
import { GridOptions } from 'ag-grid-community/dist/lib/entities/gridOptions';
import * as HelperAgGrid from '../HelperAgGrid';
import {
  IAdaptableBlotter,
  AdaptableBlotterOptions,
} from '@adaptabletools/adaptableblotter/types';

export class agGridMultipleGridDemo {
  private adaptableblotter1: IAdaptableBlotter;
  private adaptableblotter2: IAdaptableBlotter;
  constructor() {
    let data: any[];
    Helper.getDataFromJson('NorthwindOrders.json')
      .then(json => (data = json))
      .then(data => Helper.MakeAllRecordsColumnsDateProperDates(data))
      .then(() => {
        HelperAgGrid.setUpAgGridLicence();
        var columndefs = HelperAgGrid.getBasicNorthwindColumnSchema();

        // get the first grid
        let gridOptions1 = HelperAgGrid.getGridOptions(columndefs, data);
        let abName1: string = 'adaptableBlotter1';
        let vendorGridName1: string = 'grid1';
        let eGridDiv1 = document.getElementById(vendorGridName1);
        let grid1 = new Grid(eGridDiv1, gridOptions1);
        let blotterOptions1: AdaptableBlotterOptions = HelperAgGrid.getAadaptableBlotterOptionsWithDivNames(
          gridOptions1,
          'OrderId',
          'Multiple 1',
          json1,
          vendorGridName1,
          abName1
        );
        this.adaptableblotter1 = new (<any>(
          window
        )).adaptableblotteraggrid.AdaptableBlotter(blotterOptions1);

        // get the first grid
        let gridOptions2 = HelperAgGrid.getGridOptions(columndefs, data);
        let abName2: string = 'adaptableBlotter2';
        let vendorGridName2: string = 'grid2';
        let eGridDiv2 = document.getElementById(vendorGridName2);
        let grid2 = new Grid(eGridDiv2, gridOptions2);
        let blotterOptions2: AdaptableBlotterOptions = HelperAgGrid.getAadaptableBlotterOptionsWithDivNames(
          gridOptions2,
          'OrderId',
          'Multiple 2',
          json2,
          vendorGridName2,
          abName2
        );
        this.adaptableblotter2 = new (<any>(
          window
        )).adaptableblotteraggrid.AdaptableBlotter(blotterOptions2);
      });

    let json1 = {
      Dashboard: {
        VisibleToolbars: ['Export', 'Layout'],
        VisibleButtons: ['Dashboard', 'QuickSearch', 'ColumnChooser'],
        ShowSystemStatusButton: false,
      },
    };

    let json2 = {
      Dashboard: {
        VisibleToolbars: ['QuickSearch', 'ColumnFilter'],
        VisibleButtons: ['Dashboard', 'AdvancedSearch'],
        ShowSystemStatusButton: false,
      },
    };
  }
}
