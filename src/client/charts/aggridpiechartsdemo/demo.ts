import Adaptable from '@adaptabletools/adaptable/agGrid';
import '@adaptabletools/adaptable/index.css';

import '@ag-grid-community/all-modules/dist/styles/ag-grid.css';
import '@ag-grid-community/all-modules/dist/styles/ag-theme-balham.css';
import { cloneDeep } from 'lodash';

import '../../../../DemoPage/aggriddemo.css';
import { AllEnterpriseModules } from '@ag-grid-enterprise/all-modules';
import { AdaptableOptions } from '@adaptabletools/adaptable/types';

import json from '../../../../DataSets/Json/worldstats.json';
import { HelperAgGrid } from '../../../Helpers/HelperAgGrid';
import predefinedConfig from './config';
import charts from '@adaptabletools/adaptable-plugin-charts';

export default () => {
  let helperAgGrid = new HelperAgGrid();
  helperAgGrid.setUpAgGridLicence();

  let rowData = JSON.parse(JSON.stringify(json));

  const columndefs = helperAgGrid.getWorldStatsSchema();

  const gridOptions = helperAgGrid.getGridOptions(columndefs, rowData);

  const adaptableOptions: AdaptableOptions = {
    primaryKey: 'Country',
    userName: 'Demo User',
    adaptableId: 'Pie Charts Demo',
    chartOptions: {
      displayOnStartUp: true,
      showModal: false,
      pieChartMaxItems: 50,
    },
    vendorGrid: { ...gridOptions, modules: AllEnterpriseModules },
    predefinedConfig: predefinedConfig,
    plugins: [charts()],
  };

  const adaptableOptionsClone = cloneDeep(adaptableOptions);
  Adaptable.init(adaptableOptions);

  return {
    predefinedConfig,
    adaptableOptions: adaptableOptionsClone,
  };
};
