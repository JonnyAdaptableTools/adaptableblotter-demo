import * as Helper from '../../Helper';

import { Grid } from 'ag-grid-community/dist/lib/grid';
import 'adaptableblotter/base.css';
import 'adaptableblotter/themes/light.css';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';

import AdaptableBlotter from 'adaptableblotter/agGrid';
import { IAdaptableBlotterOptions } from 'adaptableblotter/types';

import '../../../DemoPage/aggriddemo.css';

import json from '../../../DataSets/Json/NorthwindOrders.json';
import { HelperAgGrid } from '../../HelperAgGrid';
import predefinedConfig from './config';

export class Demo {
  private helperAgGrid: HelperAgGrid;

  constructor() {
    this.helperAgGrid = new HelperAgGrid();
    this.helperAgGrid.setUpAgGridLicence();

    let rowData = JSON.parse(JSON.stringify(json));
    Helper.MakeAllRecordsColumnsDateProperDates(rowData);

    const columndefs = this.helperAgGrid.getBasicNorthwindColumnSchema();

    const gridOptions = this.helperAgGrid.getGridOptions(columndefs, rowData);
    new Grid(document.getElementById('grid')!, gridOptions);

    const blotterOptions: IAdaptableBlotterOptions = {
      primaryKey: 'OrderId',
      vendorGrid: gridOptions,
      userName: 'Demo User',
      blotterId: 'Basic Demo',
      licenceKey: Helper.getdemolicencekey(),
      predefinedConfig: predefinedConfig,
    };

    new AdaptableBlotter(blotterOptions);
  }
}
