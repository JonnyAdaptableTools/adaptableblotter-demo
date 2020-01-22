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
import json from '../../../../DataSets/Json/NorthwindOrders.json';
import { HelperAgGrid } from '../../../Helpers/HelperAgGrid';
import predefinedConfig from './config';
import { DataChangedInfo } from '@adaptabletools/adaptable/src/AdaptableOptions/CommonObjects/DataChangedInfo';
import { ValidationResult } from '@adaptabletools/adaptable/src/AdaptableOptions/EditOptions';

export default () => {
  let helperAgGrid = new HelperAgGrid();
  helperAgGrid.setUpAgGridLicence();

  let rowData = JSON.parse(JSON.stringify(json));

  const columndefs = helperAgGrid.getBasicNorthwindColumnSchema();

  const gridOptions = helperAgGrid.getGridOptions(columndefs, rowData);

  const adaptableOptions: AdaptableOptions = {
    primaryKey: 'OrderId',
    userName: 'Demo User',
    adaptableId: 'Server Validation Demo',
    editOptions: {
      validateOnServer: (dataChangedInfo: DataChangedInfo) => {
        return new Promise(resolve => {
          setTimeout(
            () => resolve(getServerEditResponse(dataChangedInfo)),
            500
          );
        });
      },
    },
    vendorGrid: { ...gridOptions, modules: AllEnterpriseModules },
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

  const adaptableOptionsClone = cloneDeep(adaptableOptions);
  Adaptable.init(adaptableOptions);

  return {
    predefinedConfig,
    adaptableOptions: adaptableOptionsClone,
  };
};
