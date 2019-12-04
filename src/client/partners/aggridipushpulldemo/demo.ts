import AdaptableBlotter from '@adaptabletools/adaptableblotter/agGrid';
import '@adaptabletools/adaptableblotter/index.css';
import '@adaptabletools/adaptableblotter/themes/dark.css';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import 'ag-grid-community/dist/styles/ag-theme-balham-dark.css';
import { cloneDeep } from 'lodash';
import '../../../../DemoPage/aggriddemo.css';
import {
  AdaptableBlotterOptions,
  PredefinedConfig,
} from '@adaptabletools/adaptableblotter/types';

import json from '../../../../DataSets/Json/NorthwindOrders.json';
import { HelperAgGrid } from '../../../Helpers/HelperAgGrid';
//import predefinedConfig from './config';
import ipushpull from 'ipushpull-js';

export default () => {
  let helperAgGrid = new HelperAgGrid();
  helperAgGrid.setUpAgGridLicence();

  let rowData = JSON.parse(JSON.stringify(json));

  const columndefs = helperAgGrid.getBasicNorthwindColumnSchema();

  const gridOptions = helperAgGrid.getGridOptions(columndefs, rowData);

  const blotterOptions: AdaptableBlotterOptions = {
    primaryKey: 'OrderId',
    userName: 'Demo User',
    blotterId: 'iPushPull Demo',
    vendorGrid: gridOptions,
    predefinedConfig: predefinedConfig,
  };

  const blotterOptionsClone = cloneDeep(blotterOptions);
  const blotterApi = AdaptableBlotter.init(blotterOptions);

  ipushpull.config.set({
    api_url: 'https://www.ipushpull.com/api/1.0',
    ws_url: 'https://www.ipushpull.com',
    web_url: 'https://www.ipushpull.com',
    docs_url: 'https://docs.ipushpull.com',
    storage_prefix: 'ipp_local',
    api_key: process.env.IPUSHPULL_API_KEY as string,
    api_secret: process.env.IPUSHPULL_API_SECRET as string,
    transport: 'polling',
    hsts: false, // strict cors policy
  });

  return {
    predefinedConfig,
    blotterOptions: blotterOptionsClone,
  };
};

let predefinedConfig: PredefinedConfig = {
  Partner: {
    iPushPull: {
      iPushPullConfig: ipushpull,
      Username: process.env.IPUSHPULL_USERNAME as string,
    },
  },
};
