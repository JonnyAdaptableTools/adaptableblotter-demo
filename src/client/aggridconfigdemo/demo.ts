import * as Helper from '../../Helper';
import { Grid } from 'ag-grid-community/dist/lib/grid';

import AdaptableBlotter from 'adaptableblotter/agGrid';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';

import 'adaptableblotter/base.css';
import 'adaptableblotter/themes/light.css';

import '../../../DemoPage/aggriddemo.css';

import {
  IAdaptableBlotter,
  IAdaptableBlotterOptions,
} from 'adaptableblotter/types';

import data from '../../../DataSets/Json/NorthwindOrders.json';
import { HelperAgGrid } from '../../HelperAgGrid';
import jsonConfig from './config';

export class Demo {
  private adaptableblotter: IAdaptableBlotter;
  private helperAgGrid: HelperAgGrid;

  constructor() {
    this.helperAgGrid = new HelperAgGrid();
    Helper.MakeAllRecordsColumnsDateProperDates(data);
    this.helperAgGrid.setUpAgGridLicence();

    const columndefs = this.helperAgGrid.getBasicNorthwindColumnSchema();

    const gridOptions = this.helperAgGrid.getGridOptions(columndefs, data);
    const gridDiv = document.getElementById('grid');

    new Grid(gridDiv, gridOptions);
    let blotterOptions: IAdaptableBlotterOptions = this.helperAgGrid.getAdaptableBlotterOptions(
      gridOptions,
      'OrderId',
      'Config Demo',
      jsonConfig
    );
    this.adaptableblotter = new AdaptableBlotter(blotterOptions);
  }
}
