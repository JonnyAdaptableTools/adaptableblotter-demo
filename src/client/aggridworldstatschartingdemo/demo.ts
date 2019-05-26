import * as Helper from '../../Helper';

import { Grid } from 'ag-grid-community/dist/lib/grid';
import 'adaptableblotter/base.css';
import 'adaptableblotter/themes/light.css';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import 'ag-grid-community/dist/styles/ag-theme-balham-dark.css';

import AdaptableBlotter from 'adaptableblotter/agGrid';
import { IAdaptableBlotterOptions } from 'adaptableblotter/types';

import '../../../DemoPage/aggriddemo.css';

import json from '../../../DataSets/Json/worldstats.json';
import predefinedConfig from './config';
import { HelperAgGrid } from '../../HelperAgGrid';

export class Demo {
  private helperAgGrid: HelperAgGrid;
  constructor() {
    this.helperAgGrid = new HelperAgGrid();
    Helper.MakeAllRecordsColumnsDateProperDates(json);
    this.helperAgGrid.setUpAgGridLicence();

    const columndefs = this.helperAgGrid.getWorldStatsSchema();

    const gridOptions = this.helperAgGrid.getGridOptions(columndefs, json);
    new Grid(document.getElementById('grid')!, gridOptions);

    const blotterOptions: IAdaptableBlotterOptions = {
      primaryKey: 'OrderId',
      vendorGrid: gridOptions,
      userName: 'Demo User',
      blotterId: 'World Charts Demo',
      licenceKey: Helper.getdemolicencekey(),
      predefinedConfig: predefinedConfig,
      chartOptions: {
        displayOnStartUp: true,
        showModal: false,
        pieChartMaxItems: 50,
      },
    };

    new AdaptableBlotter(blotterOptions);
  }
}
