import * as Helper from '../../Helper';

import AdaptableBlotter from 'adaptableblotter/agGrid';
import 'adaptableblotter/base.css';
import 'adaptableblotter/themes/light.css';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import { cloneDeep } from 'lodash';

import '../../../DemoPage/aggriddemo.css';

import { IAdaptableBlotterOptions } from 'adaptableblotter/types';

import json from '../../../DataSets/Json/NorthwindOrders.json';
import { HelperAgGrid } from '../../HelperAgGrid';
import predefinedConfig from './config';

export default () => {
  let helperAgGrid = new HelperAgGrid();
  helperAgGrid.setUpAgGridLicence();

  let rowData = JSON.parse(JSON.stringify(json));
  Helper.MakeAllRecordsColumnsDateProperDates(rowData);

  const columndefs = helperAgGrid.getFlashingCellColumnSchema();

  const gridOptions = helperAgGrid.getGridOptions(columndefs, rowData);
  helperAgGrid.startTickingDataagGrid(gridOptions, true);

  const blotterOptions: IAdaptableBlotterOptions = {
    primaryKey: 'OrderId',
    userName: 'Demo User',
    blotterId: 'Alert Demo',
    licenceKey: Helper.getdemolicencekey(),
    vendorGrid: gridOptions,
    predefinedConfig: predefinedConfig,
    layoutOptions: {
      includeVendorStateInLayouts: true,
      autoSaveLayouts: true,
    },
  };

  const blotterOptionsClone = cloneDeep(blotterOptions);
  new AdaptableBlotter(blotterOptions);

  return {
    predefinedConfig,
    blotterOptions: blotterOptionsClone,
  };
};
