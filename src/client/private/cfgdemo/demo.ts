import * as Helper from '../../../Helpers/Helper';
import AdaptableBlotter from '@adaptabletools/adaptableblotter/agGrid';
import '@adaptabletools/adaptableblotter/index.css';

import '@adaptabletools/adaptableblotter/themes/dark.css';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import 'ag-grid-community/dist/styles/ag-theme-balham-dark.css';
import { cloneDeep } from 'lodash';
import '../../../../DemoPage/aggriddemo.css';
import { AdaptableBlotterOptions } from '@adaptabletools/adaptableblotter/types';

import json from '../../../../DataSets/Json/cfg.json';
import { HelperAgGrid } from '../../../Helpers/HelperAgGrid';
import predefinedConfig from './config';
import { CFGHelperAgGrid } from './CFGHelperAgGrid';

export default () => {
  let helperAgGrid = new HelperAgGrid();
  helperAgGrid.setUpAgGridLicence();
  let cfgHelperAgGrid = new CFGHelperAgGrid();

  let rowData = JSON.parse(JSON.stringify(json));

  const columndefs = cfgHelperAgGrid.getCFGDataSchema();

  const gridOptions = helperAgGrid.getGridOptions(columndefs, rowData);
  gridOptions.floatingFilter = true;
  gridOptions.defaultColDef = {
    resizable: true,
    filter: true,
    sortable: true,
  };

  const blotterOptions: AdaptableBlotterOptions = {
    primaryKey: 'Order ID',
    userName: 'Demo User',
    blotterId: 'CFG Demo',
    licenceKey: Helper.getdemolicencekey(),
    vendorGrid: gridOptions,
    predefinedConfig: predefinedConfig,
  };

  const blotterOptionsClone = cloneDeep(blotterOptions);
  new AdaptableBlotter(blotterOptions);

  return {
    predefinedConfig,
    blotterOptions: blotterOptionsClone,
  };
};
