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

import json from '../../../../DataSets/Json/NorthwindOrders.json';
import { HelperAgGrid } from '../../../Helpers/HelperAgGrid';
import predefinedConfig from './config';
import { DataChangedInfo } from '@adaptabletools/adaptableblotter/App_Scripts/BlotterOptions/CommonObjects/DataChangedInfo';
import { ValidationResult } from '@adaptabletools/adaptableblotter/App_Scripts/BlotterOptions/EditOptions';

export default () => {
  let helperAgGrid = new HelperAgGrid();
  helperAgGrid.setUpAgGridLicence();

  let rowData = JSON.parse(JSON.stringify(json));

  const columndefs = helperAgGrid.getBasicNorthwindColumnSchema();

  const gridOptions = helperAgGrid.getGridOptions(columndefs, rowData);

  const blotterOptions: AdaptableBlotterOptions = {
    primaryKey: 'OrderId',
    userName: 'Demo User',
    blotterId: 'Server Validation Demo',
    editOptions: {
      validateOnServer: (dataChangedInfo: DataChangedInfo) => {
        return new Promise((resolve, reject) => {
          setTimeout(
            () => resolve(getServerEditResponse(dataChangedInfo)),
            500
          );
        });
      },
    },

    vendorGrid: gridOptions,
    predefinedConfig: predefinedConfig,
  };

  function getServerEditResponse(
    dataChangedInfo: DataChangedInfo
  ): ValidationResult {
    if (dataChangedInfo.ColumnId === 'ItemCount') {
      if (dataChangedInfo.NewValue == 17) {
        return {
          NewValue: dataChangedInfo.OldValue,
          ValidationMessage: 'Cannot set Item Count to 17',
        };
      } else if (dataChangedInfo.NewValue > 25) {
        return {
          NewValue: 25,
          ValidationMessage: 'Item Count cannot be greater than 25',
        };
      } else if (dataChangedInfo.NewValue < 5) {
        return {
          NewValue: 5,
          ValidationMessage: 'Item Count cannot  be less than  5',
        };
      }
    }
    return {};
  }

  const blotterOptionsClone = cloneDeep(blotterOptions);
  new AdaptableBlotter(blotterOptions);

  return {
    predefinedConfig,
    blotterOptions: blotterOptionsClone,
  };
};
