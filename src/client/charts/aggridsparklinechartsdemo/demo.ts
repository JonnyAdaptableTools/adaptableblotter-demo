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
import { HelperAgGrid } from '../../../Helpers/HelperAgGrid';
import predefinedConfig from './config';

export default () => {
  let helperAgGrid = new HelperAgGrid();
  helperAgGrid.setUpAgGridLicence();

  const columndefs = helperAgGrid.getTradeSchema();

  const trades = helperAgGrid.getTrades(300);

  const gridOptions = helperAgGrid.getGridOptions(columndefs, trades);

  const blotterOptions: AdaptableBlotterOptions = {
    primaryKey: 'tradeId',
    userName: 'Demo User',
    blotterId: 'Sparkline Charts Demo',

    chartOptions: {
      displayOnStartUp: true,
      showModal: false,
      pieChartMaxItems: 50,
    },
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
