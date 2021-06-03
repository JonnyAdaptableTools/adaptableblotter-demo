import Adaptable from '@adaptabletools/adaptable/agGrid';
import '@adaptabletools/adaptable/index.css';

import '@ag-grid-community/all-modules/dist/styles/ag-grid.css';
import '@ag-grid-community/all-modules/dist/styles/ag-theme-balham.css';
import { cloneDeep } from 'lodash';

import '../../../../DemoPage/aggriddemo.css';

import { AdaptableOptions } from '@adaptabletools/adaptable/types';
import { AllEnterpriseModules } from '@ag-grid-enterprise/all-modules';
import json from '../../../../DataSets/Json/NorthwindOrders.json';
import { HelperAgGrid } from '../../../Helpers/HelperAgGrid';
import predefinedConfig from './config';

export default async () => {
  let helperAgGrid = new HelperAgGrid();
  helperAgGrid.setUpAgGridLicence();

  let rowData = JSON.parse(JSON.stringify(json));
  helperAgGrid.convertExcelData(rowData);

  const columndefs = helperAgGrid.getBasicNorthwindColumnSchema();

  const gridOptions = helperAgGrid.getGridOptions(columndefs, rowData);

  const adaptableOptions: AdaptableOptions = {
    primaryKey: 'OrderId',
    userName: 'Demo User',
    adaptableId: 'Color Palette Demo',
    searchOptions: {
      ignoreCaseInQueries: false,
      // maxColumnValueItemsDisplayed: 5,
      //  columnValuesOnlyInQueries: true,
    },

    vendorGrid: { ...gridOptions, modules: AllEnterpriseModules },
    predefinedConfig: predefinedConfig,
  };

  const adaptableOptionsClone = cloneDeep(adaptableOptions);
  Adaptable.init(adaptableOptions);

  return {
    predefinedConfig,
    adaptableOptions: adaptableOptionsClone,
  };
};
