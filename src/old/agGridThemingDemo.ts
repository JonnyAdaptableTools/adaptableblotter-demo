import * as Helper from '../Helpers/Helper';
import { Grid } from 'ag-grid-community/dist/lib/grid';
import { GridOptions } from 'ag-grid-community/dist/lib/entities/gridOptions';
import * as HelperAgGrid from '../Helpers/HelperAgGrid';
import {
  IAdaptableBlotter,
  AdaptableBlotterOptions,
} from '@adaptabletools/adaptableblotter/types';

export class agGridThemingDemo {
  private adaptableblotter: IAdaptableBlotter;
  constructor() {
    let data: any[];
    Helper.getDataFromJson('NorthwindOrders.json')
      .then(json => (data = json))
      .then(data => Helper.MakeAllRecordsColumnsDateProperDates(data))
      .then(() => {
        HelperAgGrid.setUpAgGridLicence();
        var columndefs = HelperAgGrid.getBasicNorthwindColumnSchema();
        var gridOptions = HelperAgGrid.getGridOptions(columndefs, data);
        var eGridDiv = document.getElementById('grid');
        let grid = new Grid(eGridDiv, gridOptions);
        // HelperAgGrid.startTickingDataagGrid(gridOptions);
        let configUrl = 'src/configs/themeconfig.json';
        let blotterOptions: AdaptableBlotterOptions = HelperAgGrid.getAadaptableBlotterOptions(
          gridOptions,
          'OrderId',
          'Theming Demo',
          json
        );
        this.adaptableblotter = new (<any>(
          window
        )).adaptableblotteraggrid.AdaptableBlotter(blotterOptions);
      });
  }
}

let json = {
  Theme: {
    CurrentTheme: 'dark',
  },
  Dashboard: {
    VisibleToolbars: ['SmartEdit', 'Export', 'BulkUpdate'],
    VisibleButtons: [
      'About',
      'Dashboard',
      'QuickSearch',
      'ColumnChooser',
      'AdvancedSearch',
    ],
    DashboardVisibility: 'Minimised',
    ShowSystemStatusButton: false,
  },
};
