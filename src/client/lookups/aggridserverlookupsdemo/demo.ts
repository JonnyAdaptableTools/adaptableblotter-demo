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
import { IServerColumnValues } from '@adaptabletools/adaptable/src/AdaptableOptions/QueryOptions';

export default () => {
  let helperAgGrid = new HelperAgGrid();
  helperAgGrid.setUpAgGridLicence();

  let rowData = JSON.parse(JSON.stringify(json));

  const columndefs = helperAgGrid.getShortNorthwindColumnSchema();

  const gridOptions = helperAgGrid.getGridOptions(columndefs, rowData);
  gridOptions.floatingFilter = true;
  gridOptions.modules = AllEnterpriseModules;
  const adaptableOptions: AdaptableOptions = {
    primaryKey: 'OrderId',
    userName: 'Demo User',
    adaptableId: 'Server Lookups Demo',
    queryOptions: {
      getColumnValues: (columnName: string) => {
        return new Promise((resolve, reject) => {
          setTimeout(() => resolve(getValuesForColumn(columnName)), 500);
        });
      },
    },

    vendorGrid: gridOptions,
    predefinedConfig: predefinedConfig,
  };

  const adaptableOptionsClone = cloneDeep(adaptableOptions);
  const adaptableApi = Adaptable.init(adaptableOptions);

  return {
    predefinedConfig,
    adaptableOptions: adaptableOptionsClone,
  };

  function getValuesForColumn(columnName: string): IServerColumnValues {
    let vals;

    if (columnName === 'country') {
      vals = ['Rasdu'];
    } else if (columnName === 'currency') {
      vals = ['Jonny'];
    } else {
      return undefined; // not nice and we need to fix
    }
    return {
      DistinctCriteriaPairValue: 'DisplayValue',
      ColumnValues: vals,
    };
  }
};
