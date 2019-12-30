import * as Helper from '../../../Helpers/Helper';

import AdaptableBlotter from '@adaptabletools/adaptableblotter/agGrid';
import '@adaptabletools/adaptableblotter/index.css';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import { cloneDeep } from 'lodash';

import '../../../../DemoPage/aggriddemo.css';

import { AdaptableBlotterOptions } from '@adaptabletools/adaptableblotter/types';

import json from '../../../../DataSets/Json/NorthwindOrders.json';
import { HelperAgGrid } from '../../../Helpers/HelperAgGrid';
import predefinedConfig from './config';
import { IServerColumnValues } from '@adaptabletools/adaptableblotter/App_Scripts/BlotterOptions/QueryOptions';

export default () => {
  let helperAgGrid = new HelperAgGrid();
  helperAgGrid.setUpAgGridLicence();

  let rowData = JSON.parse(JSON.stringify(json));

  const columndefs = helperAgGrid.getShortNorthwindColumnSchema();

  const gridOptions = helperAgGrid.getGridOptions(columndefs, rowData);
  gridOptions.floatingFilter = true;

  const adaptableOptions: AdaptableBlotterOptions = {
    primaryKey: 'OrderId',
    userName: 'Demo User',
    blotterId: 'Server Lookups Demo',
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
  const blotterApi = AdaptableBlotter.init(adaptableOptions);

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
