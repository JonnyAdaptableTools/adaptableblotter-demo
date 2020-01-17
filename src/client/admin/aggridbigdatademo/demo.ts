import Adaptable from '@adaptabletools/adaptable/agGrid';
import '@adaptabletools/adaptable/index.css';

import '@ag-grid-community/all-modules/dist/styles/ag-grid.css';
import '@ag-grid-community/all-modules/dist/styles/ag-theme-balham.css';
import { cloneDeep } from 'lodash';

import { AllEnterpriseModules } from '@ag-grid-enterprise/all-modules';
import '../../../../DemoPage/aggriddemo.css';

import { AdaptableOptions } from '@adaptabletools/adaptable/types';

import { HelperAgGrid } from '../../../Helpers/HelperAgGrid';
import predefinedConfig from './config';
import { TickingDataHelper } from '../../../Helpers/TickingDataHelper';

export default () => {
  let helperAgGrid = new HelperAgGrid();
  helperAgGrid.setUpAgGridLicence();
  const tickingDataHelper = new TickingDataHelper();
  // let rowData = JSON.parse(JSON.stringify(json));

  const columndefs = helperAgGrid.getTradeSchema();

  const trades = helperAgGrid.getTrades(100000);

  const gridOptions = helperAgGrid.getGridOptions(columndefs, trades);
  gridOptions.floatingFilter = true;
  gridOptions.modules = AllEnterpriseModules;

  gridOptions.statusBar = {
    statusPanels: [
      { statusPanel: 'agTotalRowCountComponent', align: 'left' },
      { statusPanel: 'agFilteredRowCountComponent' },
      // { statusPanel: 'agSelectedRowCountComponent' },
      //  { statusPanel: 'agAggregationComponent' },
    ],
  };

  const adaptableOptions: AdaptableOptions = {
    primaryKey: 'tradeId',
    userName: 'Demo User',
    adaptableId: 'Big Data Demo',
    queryOptions: {
      maxColumnValueItemsDisplayed: 1000,
    },
    vendorGrid: gridOptions,

    predefinedConfig: predefinedConfig,
  };

  const adaptableOptionsClone = cloneDeep(adaptableOptions);
  const adaptableApi = Adaptable.init(adaptableOptions);
  tickingDataHelper.startTickingDataagGridTrade(adaptableApi, gridOptions, 20);
  return {
    predefinedConfig,
    adaptableOptions: adaptableOptionsClone,
  };
};
