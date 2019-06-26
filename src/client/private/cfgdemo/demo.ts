import * as Helper from '../../../Helper';
import AdaptableBlotter from 'adaptableblotter/agGrid';
import 'adaptableblotter/base.css';
import 'adaptableblotter/themes/light.css';
import 'adaptableblotter/themes/dark.css';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import 'ag-grid-community/dist/styles/ag-theme-balham-dark.css';
import { cloneDeep } from 'lodash';
import '../../../../DemoPage/aggriddemo.css';
import { AdaptableBlotterOptions } from 'adaptableblotter/types';

import json from '../../../../DataSets/Json/cfg.json';
import { HelperAgGrid } from '../../../HelperAgGrid';
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
