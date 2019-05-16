import * as Helper from '../../Helper';

import 'adaptableblotter/base.css';
import 'adaptableblotter/themes/dark.css';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham-dark.css';

import AdaptableBlotter from 'adaptableblotter/agGrid';
import { IAdaptableBlotterOptions } from 'adaptableblotter/types';

import '../../../DemoPage/aggriddemo.css';

import json from '../../../DataSets/Json/NorthwindOrders.json';
import config from './config';
import { HelperAgGrid } from '../../HelperAgGrid';

export class Demo {
  // private helperAgGrid: HelperAgGrid;

  private blotter: AdaptableBlotter;

  constructor() {
    let helperAgGrid = new HelperAgGrid();
    helperAgGrid.setUpAgGridLicence();

    let rowData = JSON.parse(JSON.stringify(json));
    Helper.MakeAllRecordsColumnsDateProperDates(rowData);

    const columndefs = helperAgGrid.getBasicNorthwindColumnSchema();

    let gridOptions = helperAgGrid.getGridOptions(columndefs, rowData);

    const blotterOptions: IAdaptableBlotterOptions = helperAgGrid.getAdaptableBlotterOptions(
      gridOptions,
      'OrderId',
      'Theming Demo',
      config
    );

    this.blotter = new AdaptableBlotter(blotterOptions);
  }
}
