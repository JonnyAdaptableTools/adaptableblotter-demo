import * as Helper from '../../../Helpers/Helper';

import AdaptableBlotter from '@adaptabletools/adaptableblotter/agGrid';
import '@adaptabletools/adaptableblotter/index.css';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import { cloneDeep } from 'lodash';

import '../../../../DemoPage/aggriddemo.css';

import { AdaptableBlotterOptions } from '@adaptabletools/adaptableblotter/types';

import json from '../../../../DataSets/Json/NorthwindOrders.json';
import { HelperAgGrid } from '../../../Helpers/HelperAgGrid';
import predefinedConfig from './config';

export default () => {
  let helperAgGrid = new HelperAgGrid();
  helperAgGrid.setUpAgGridLicence();

  const columndefs = helperAgGrid.getTradeSchema();

  const trades = helperAgGrid.getTrades(500);

  const gridOptions = helperAgGrid.getGridOptions(columndefs, trades);

  //const gridOptions = helperAgGrid.getGridOptions(columndefs, rowData);
  gridOptions.floatingFilter = true;

  const blotterOptions: AdaptableBlotterOptions = {
    primaryKey: 'OrderId',
    userName: 'Demo User',
    blotterId: 'Quick Filter  Demo',

    vendorGrid: gridOptions,
    predefinedConfig: predefinedConfig,
  };

  const blotterOptionsClone = cloneDeep(blotterOptions);
  const blotterApi = AdaptableBlotter.init(blotterOptions);

  return {
    predefinedConfig,
    blotterOptions: blotterOptionsClone,
  };
};