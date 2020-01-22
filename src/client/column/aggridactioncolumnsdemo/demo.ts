import Adaptable from '@adaptabletools/adaptable/agGrid';
import '@adaptabletools/adaptable/index.css';
import './actioncolumn.css';
import { AllEnterpriseModules } from '@ag-grid-enterprise/all-modules';
import '@ag-grid-community/all-modules/dist/styles/ag-grid.css';
import '@ag-grid-community/all-modules/dist/styles/ag-theme-balham.css';
import { cloneDeep } from 'lodash';

import '../../../../DemoPage/aggriddemo.css';

import {
  AdaptableOptions,
  AdaptableApi,
  ActionColumnClickedEventArgs,
} from '@adaptabletools/adaptable/types';

import json from '../../../../DataSets/Json/NorthwindOrders.json';
import { HelperAgGrid } from '../../../Helpers/HelperAgGrid';
import predefinedConfig from './config';
import { ActionColumnClickedInfo } from '@adaptabletools/adaptable/src/Api/Events/ActionColumnClicked';

export default () => {
  let helperAgGrid = new HelperAgGrid();
  helperAgGrid.setUpAgGridLicence();

  let rowData = JSON.parse(JSON.stringify(json));

  const columndefs = helperAgGrid.getBasicNorthwindColumnSchema();

  const gridOptions = helperAgGrid.getGridOptions(columndefs, rowData);

  const adaptableOptions: AdaptableOptions = {
    primaryKey: 'OrderId',
    userName: 'Demo User',
    adaptableId: 'Action Column Demo',

    vendorGrid: { ...gridOptions, modules: AllEnterpriseModules },
    predefinedConfig: predefinedConfig,
  };

  const adaptableOptionsClone = cloneDeep(adaptableOptions);
  const adaptableApi = Adaptable.init(adaptableOptions);

  adaptableApi.eventApi.on(
    'ActionColumnClicked',
    (actionColumnEventArgs: ActionColumnClickedEventArgs) => {
      onActionColumnClicked(adaptableApi, actionColumnEventArgs);
    }
  );
  return {
    predefinedConfig,
    adaptableOptions: adaptableOptionsClone,
  };

  function onActionColumnClicked(
    adaptableApi: AdaptableApi,
    actionColumnEventArgs: ActionColumnClickedEventArgs
  ) {
    let actionColumnClickedInfo: ActionColumnClickedInfo =
      actionColumnEventArgs.data[0].id;
    let rowData: any = actionColumnClickedInfo.rowData;

    if (actionColumnEventArgs.data[0].id.actionColumn.ColumnId == 'Plus') {
      let itemCount = rowData.ItemCount;
      adaptableApi.gridApi.setCellValue(
        'ItemCount',
        itemCount + 1,
        actionColumnClickedInfo.primaryKeyValue,
        true
      );
    } else if (
      actionColumnEventArgs.data[0].id.actionColumn.ColumnId == 'Minus'
    ) {
      let itemCount = rowData.ItemCount;
      adaptableApi.gridApi.setCellValue(
        'ItemCount',
        itemCount - 1,
        actionColumnClickedInfo.primaryKeyValue,
        true
      );
    } else if (
      actionColumnEventArgs.data[0].id.actionColumn.ColumnId == 'Multiply'
    ) {
      let multiplier: number = rowData.ItemCost > 75 ? 2 : 3;
      let newItemCost = rowData.ItemCost * multiplier;
      newItemCost = Math.round(newItemCost * 100) / 100;
      adaptableApi.gridApi.setCellValue(
        'ItemCost',
        newItemCost,
        actionColumnClickedInfo.primaryKeyValue,
        true
      );
    } else if (
      actionColumnEventArgs.data[0].id.actionColumn.ColumnId == 'Action'
    ) {
      adaptableApi.gridApi.deleteGridData([actionColumnClickedInfo.rowData]);
    }
  }
};
