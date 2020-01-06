import AdaptableBlotter from '@adaptabletools/adaptableblotter/agGrid';
import '@adaptabletools/adaptableblotter/index.css';
import './actioncolumn.css';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import { cloneDeep } from 'lodash';

import '../../../../DemoPage/aggriddemo.css';

import {
  AdaptableBlotterOptions,
  BlotterApi,
} from '@adaptabletools/adaptableblotter/types';

import json from '../../../../DataSets/Json/NorthwindOrders.json';
import { HelperAgGrid } from '../../../Helpers/HelperAgGrid';
import predefinedConfig from './config';
import { ActionColumnClickedEventArgs } from '@adaptabletools/adaptableblotter-react-aggrid/adaptableblotter/App_Scripts/Api/Events/ActionColumnClicked';
import { ActionColumnClickedInfo } from '@adaptabletools/adaptableblotter/App_Scripts/Api/Events/ActionColumnClicked';

export default () => {
  let helperAgGrid = new HelperAgGrid();
  helperAgGrid.setUpAgGridLicence();
  // let adaptableBlotter: IAdaptableBlotter;

  let rowData = JSON.parse(JSON.stringify(json));

  const columndefs = helperAgGrid.getBasicNorthwindColumnSchema();

  const gridOptions = helperAgGrid.getGridOptions(columndefs, rowData);

  const adaptableOptions: AdaptableBlotterOptions = {
    primaryKey: 'OrderId',
    userName: 'Demo User',
    blotterId: 'Action Column Demo',

    vendorGrid: gridOptions,
    predefinedConfig: predefinedConfig,
  };

  const adaptableOptionsClone = cloneDeep(adaptableOptions);
  const adaptableApi = AdaptableBlotter.init(adaptableOptions);

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
    adaptableApi: BlotterApi,
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
