import Adaptable from '@adaptabletools/adaptable/agGrid';
import '@adaptabletools/adaptable/index.css';

import '@ag-grid-community/all-modules/dist/styles/ag-grid.css';
import '@ag-grid-community/all-modules/dist/styles/ag-theme-balham.css';
import { cloneDeep } from 'lodash';

import '../../../../DemoPage/aggriddemo.css';
import { AllEnterpriseModules } from '@ag-grid-enterprise/all-modules';
import { AdaptableOptions } from '@adaptabletools/adaptable/types';
import { HelperAgGrid } from '../../../Helpers/HelperAgGrid';
import predefinedConfig from './config';
import charts from '@adaptabletools/adaptable-plugin-charts';

export default () => {
  let helperAgGrid = new HelperAgGrid();
  helperAgGrid.setUpAgGridLicence();

  const columndefs = helperAgGrid.getTradeSchemaWithSparkline();

  const trades = helperAgGrid.getTrades(500);

  const gridOptions = helperAgGrid.getGridOptions(columndefs, trades);
  gridOptions.modules = AllEnterpriseModules;

  const adaptableOptions: AdaptableOptions = {
    primaryKey: 'tradeId',
    userName: 'Demo User',
    adaptableId: 'Sparkline Columns Demo',
    vendorGrid: gridOptions,
    predefinedConfig: predefinedConfig,
    plugins: [charts()],
  };

  const adaptableOptionsClone = cloneDeep(adaptableOptions);
  const adaptableApi = Adaptable.init(adaptableOptions);

  return {
    predefinedConfig,
    adaptableOptions: adaptableOptionsClone,
  };
};
