import * as Helper from '../../Helper';

import { Grid } from 'ag-grid-community/dist/lib/grid';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import 'ag-grid-community/dist/styles/ag-theme-balham-dark.css';

import {
  setUpAgGridLicence,
  getWorldStatsSchema,
  getGridOptions,
  getAdaptableBlotterOptions
} from '../../HelperAgGrid';

import AdaptableBlotter from 'adaptableblotter/agGrid';
import { IAdaptableBlotterOptions } from 'adaptableblotter/types';

import 'adaptableblotter/base.css';
import 'adaptableblotter/themes/light.css';

import '../../../DemoPage/aggriddemo.css';

import json from '../../../DataSets/Json/worldstats.json';
import config from './config';

export class Demo {
  constructor() {
    Helper.MakeAllRecordsColumnsDateProperDates(json);
    setUpAgGridLicence();

    const columndefs = getWorldStatsSchema();

    const gridOptions = getGridOptions(columndefs, json);
    new Grid(document.getElementById('grid')!, gridOptions);

    const blotterOptions: IAdaptableBlotterOptions = getAdaptableBlotterOptions(
      gridOptions,
      'Country',
      'World Stats Charting Demo',
      config
    );

    new AdaptableBlotter(blotterOptions);
  }
}
