import * as Helper from '../../Helper';
import { Grid } from 'ag-grid-community/dist/lib/grid';

import * as HelperAgGrid from '../../HelperAgGrid';
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

export class Demo {
  private adaptableblotter: IAdaptableBlotter;
  constructor() {
    Helper.MakeAllRecordsColumnsDateProperDates(data);
    HelperAgGrid.setUpAgGridLicence();

    const columndefs = HelperAgGrid.getGroupingNorthwindColumnSchema();

    const gridOptions = HelperAgGrid.getGridOptions(columndefs, data);
    const gridDiv = document.getElementById('grid');

    new Grid(gridDiv, gridOptions);
    let blotterOptions: IAdaptableBlotterOptions = HelperAgGrid.getAdaptableBlotterOptions(
      gridOptions,
      'OrderId',
      'Grouping Demo',
      {}
    );
    this.adaptableblotter = new AdaptableBlotter(blotterOptions);
  }
}
