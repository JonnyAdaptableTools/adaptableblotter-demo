import AdaptableBlotter from '@adaptabletools/adaptableblotter/agGrid';
import '@adaptabletools/adaptableblotter/index.css';
import './actioncolumn.css';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import { cloneDeep } from 'lodash';

import '../../../../DemoPage/aggriddemo.css';

import {
  AdaptableBlotterOptions,
  IAdaptableBlotter,
  BlotterApi,
} from '@adaptabletools/adaptableblotter/types';

import json from '../../../../DataSets/Json/NorthwindOrders.json';
import { HelperAgGrid } from '../../../Helpers/HelperAgGrid';
import predefinedConfig from './config';
import {
  ActionColumnClickedEventArgs,
  ActionColumnClickedInfo,
} from '@adaptabletools/adaptableblotter/App_Scripts/Api/Events/BlotterEvents';

export default () => {
  let helperAgGrid = new HelperAgGrid();
  helperAgGrid.setUpAgGridLicence();
  // let adaptableBlotter: IAdaptableBlotter;

  let rowData = JSON.parse(JSON.stringify(json));

  const columndefs = helperAgGrid.getBasicNorthwindColumnSchema();

  const gridOptions = helperAgGrid.getGridOptions(columndefs, rowData);

  const blotterOptions: AdaptableBlotterOptions = {
    primaryKey: 'OrderId',
    userName: 'Demo User',
    blotterId: 'Action Column Demo',

    vendorGrid: gridOptions,
    predefinedConfig: predefinedConfig,
  };

  const blotterOptionsClone = cloneDeep(blotterOptions);
  const blotterApi = AdaptableBlotter.init(blotterOptions);

  blotterApi.eventApi.on(
    'ActionColumnClicked',
    (actionColumnEventArgs: ActionColumnClickedEventArgs) => {
      onActionColumnClicked(blotterApi, actionColumnEventArgs);
    }
  );
  return {
    predefinedConfig,
    blotterOptions: blotterOptionsClone,
  };

  function onActionColumnClicked(
    blotterApi: BlotterApi,
    actionColumnEventArgs: ActionColumnClickedEventArgs
  ) {
    let actionColumnClickedInfo: ActionColumnClickedInfo =
      actionColumnEventArgs.data[0].id;
    let rowData: any = actionColumnClickedInfo.rowData;

    if (actionColumnEventArgs.data[0].id.actionColumn.ColumnId == 'Plus') {
      let itemCount = rowData.ItemCount;
      blotterApi.gridApi.setCellValue(
        'ItemCount',
        itemCount + 1,
        actionColumnClickedInfo.primaryKeyValue
      );
    } else if (
      actionColumnEventArgs.data[0].id.actionColumn.ColumnId == 'Minus'
    ) {
      let itemCount = rowData.ItemCount;
      blotterApi.gridApi.setCellValue(
        'ItemCount',
        itemCount - 1,
        actionColumnClickedInfo.primaryKeyValue
      );
    } else if (
      actionColumnEventArgs.data[0].id.actionColumn.ColumnId == 'Multiply'
    ) {
      let multiplier: number = rowData.ItemCost > 75 ? 2 : 3;
      let newItemCost = rowData.ItemCost * multiplier;
      newItemCost = Math.round(newItemCost * 100) / 100;
      blotterApi.gridApi.setCellValue(
        'ItemCost',
        newItemCost,
        actionColumnClickedInfo.primaryKeyValue
      );
    } else if (
      actionColumnEventArgs.data[0].id.actionColumn.ColumnId == 'Action'
    ) {
      blotterApi.gridApi.deleteGridData([actionColumnClickedInfo.rowData]);
    }
  }
};
