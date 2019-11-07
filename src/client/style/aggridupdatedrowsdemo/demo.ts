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
  IAdaptableBlotter,
} from '@adaptabletools/adaptableblotter/types';

import { HelperAgGrid } from '../../../Helpers/HelperAgGrid';
import { TickingDataHelper } from '../../../Helpers/TickingDataHelper';
import predefinedConfig from './config';

export default () => {
  let helperAgGrid = new HelperAgGrid();
  helperAgGrid.setUpAgGridLicence();
  const tickingDataHelper = new TickingDataHelper();

  const columndefs = helperAgGrid.getTradeSchema();

  const tradeCount: number = 200;

  const trades = helperAgGrid.getTrades(tradeCount);

  const gridOptions = helperAgGrid.getGridOptions(columndefs, trades);

  const blotterOptions: AdaptableBlotterOptions = {
    primaryKey: 'tradeId',
    userName: 'Demo User',
    blotterId: 'Updated Rows Demo',
    vendorGrid: gridOptions,
    predefinedConfig: predefinedConfig,
  };

  const blotterOptionsClone = cloneDeep(blotterOptions);
  const adaptableblotter: IAdaptableBlotter = new AdaptableBlotter(
    blotterOptions
  );

  tickingDataHelper.startTickingDataagGridTradesUpdateData(
    gridOptions,
    adaptableblotter,
    4000,
    tradeCount
  );
  return {
    predefinedConfig,
    blotterOptions: blotterOptionsClone,
  };
};
