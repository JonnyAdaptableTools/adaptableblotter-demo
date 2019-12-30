import AdaptableBlotter from '@adaptabletools/adaptableblotter/agGrid';
import '@adaptabletools/adaptableblotter/index.css';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import { cloneDeep } from 'lodash';

import '../../../../DemoPage/aggriddemo.css';

import {
  AdaptableBlotterOptions,
  IAdaptableBlotter,
} from '@adaptabletools/adaptableblotter/types';

import { HelperAgGrid } from '../../../Helpers/HelperAgGrid';
import predefinedConfig from './config';

export default () => {
  let helperAgGrid = new HelperAgGrid();
  helperAgGrid.setUpAgGridLicence();

  const columndefs = helperAgGrid.getTradeSchemaWithSparkline();

  const trades = helperAgGrid.getTrades(500);

  const gridOptions = helperAgGrid.getGridOptions(columndefs, trades);

  const adaptableOptions: AdaptableBlotterOptions = {
    primaryKey: 'tradeId',
    userName: 'Demo User',
    blotterId: 'Sparkline Columns Demo',

    vendorGrid: gridOptions,
    predefinedConfig: predefinedConfig,
  };

  const adaptableOptionsClone = cloneDeep(adaptableOptions);
  const blotterApi = AdaptableBlotter.init(adaptableOptions);

  return {
    predefinedConfig,
    adaptableOptions: adaptableOptionsClone,
  };
};
