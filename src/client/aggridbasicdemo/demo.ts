import * as Helper from '../../Helper';
import { Grid } from 'ag-grid-community/dist/lib/grid';

import {
  setUpAgGridLicence,
  getBasicNorthwindColumnSchema,
  getGridOptions,
  getAdaptableBlotterOptions
} from '../../HelperAgGrid';

import AdaptableBlotter from 'adaptableblotter/agGrid';
import { IAdaptableBlotterOptions } from 'adaptableblotter/types';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';

import 'adaptableblotter/base.css';
import 'adaptableblotter/themes/light.css';

import '../../../DemoPage/aggriddemo.css';

import json from '../../../DataSets/Json/NorthwindOrders.json';

export class Demo {
  constructor() {
    Helper.MakeAllRecordsColumnsDateProperDates(json);
    setUpAgGridLicence();

    const columndefs = getBasicNorthwindColumnSchema();

    const gridOptions = getGridOptions(columndefs, json);
    new Grid(document.getElementById('grid')!, gridOptions);

    const blotterOptions: IAdaptableBlotterOptions = getAdaptableBlotterOptions(
      gridOptions,
      'OrderId',
      'Basic Demo',
      {}
    );

    new AdaptableBlotter(blotterOptions);
  }
}
