import Adaptable from '@adaptabletools/adaptable/agGrid';
import '@adaptabletools/adaptable/index.css';
import '@adaptabletools/adaptable/themes/dark.css';
import '@ag-grid-community/all-modules/dist/styles/ag-grid.css';
import '@ag-grid-community/all-modules/dist/styles/ag-theme-balham.css';
import '@ag-grid-community/all-modules/dist/styles/ag-theme-balham-dark.css';
import { cloneDeep } from 'lodash';
import '../../../../DemoPage/aggriddemo.css';
import { AdaptableOptions } from '@adaptabletools/adaptable/types';
import { AllEnterpriseModules } from '@ag-grid-enterprise/all-modules';
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
  gridOptions.modules = AllEnterpriseModules;

  const adaptableOptions: AdaptableOptions = {
    primaryKey: 'tradeId',
    userName: 'Demo User',
    adaptableId: 'Updated Rows Demo',
    vendorGrid: gridOptions,
    predefinedConfig: predefinedConfig,
  };

  const adaptableOptionsClone = cloneDeep(adaptableOptions);
  const adaptableApi = Adaptable.init(adaptableOptions);

  adaptableApi.eventApi.on('AdaptableReady', () => {
    tickingDataHelper.startTickingDataagGridTradesUpdateData(
      gridOptions,
      adaptableApi,
      4000,
      tradeCount
    );
  });

  return {
    unload: () => {
      tickingDataHelper.turnOffTicking();
    },
    predefinedConfig,
    adaptableOptions: adaptableOptionsClone,
  };
};
