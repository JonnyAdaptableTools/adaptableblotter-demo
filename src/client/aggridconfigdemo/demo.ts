import * as Helper from '../../Helper';
import { Grid } from 'ag-grid-community/dist/lib/grid';

import AdaptableBlotter from 'adaptableblotter/agGrid';
import 'adaptableblotter/base.css';
import 'adaptableblotter/themes/light.css';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';

import '../../../DemoPage/aggriddemo.css';

import {
  IAdaptableBlotter,
  IAdaptableBlotterOptions,
} from 'adaptableblotter/types';

import json from '../../../DataSets/Json/NorthwindOrders.json';
import { HelperAgGrid } from '../../HelperAgGrid';
import predefinedConfig from './config';

export class Demo {
  private adaptableblotter: IAdaptableBlotter;
  private helperAgGrid: HelperAgGrid;

  constructor() {
    this.helperAgGrid = new HelperAgGrid();
    this.helperAgGrid.setUpAgGridLicence();

    let rowData = JSON.parse(JSON.stringify(json));
    Helper.MakeAllRecordsColumnsDateProperDates(rowData);

    const columndefs = this.helperAgGrid.getBasicNorthwindColumnSchema();

    const gridOptions = this.helperAgGrid.getGridOptions(columndefs, rowData);

    const blotterOptions: IAdaptableBlotterOptions = {
      primaryKey: 'OrderId',
      vendorGrid: gridOptions,
      userName: 'Demo User',
      blotterId: 'Config Demo',
      licenceKey: Helper.getdemolicencekey(),
      predefinedConfig: predefinedConfig,
    };
    this.adaptableblotter = new AdaptableBlotter(blotterOptions);
  }
}
