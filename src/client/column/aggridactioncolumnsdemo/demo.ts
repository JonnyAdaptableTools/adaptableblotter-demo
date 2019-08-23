import * as Helper from '../../../Helpers/Helper';

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
} from '@adaptabletools/adaptableblotter/types';

import json from '../../../../DataSets/Json/NorthwindOrders.json';
import { HelperAgGrid } from '../../../Helpers/HelperAgGrid';
import predefinedConfig from './config';
import { ActionColumnClickedEventArgs } from '@adaptabletools/adaptableblotter/App_Scripts/Api/Events/BlotterEvents';

export default () => {
  let helperAgGrid = new HelperAgGrid();
  helperAgGrid.setUpAgGridLicence();
  let adaptableBlotter: IAdaptableBlotter;

  let rowData = JSON.parse(JSON.stringify(json));

  const columndefs = helperAgGrid.getBasicNorthwindColumnSchema();

  const gridOptions = helperAgGrid.getGridOptions(columndefs, rowData);

  const blotterOptions: AdaptableBlotterOptions = {
    primaryKey: 'OrderId',
    userName: 'Demo User',
    blotterId: 'Action Columns Demo',
    licenceKey: Helper.getdemolicencekey(),
    vendorGrid: gridOptions,
    predefinedConfig: predefinedConfig,
  };

  blotterOptions.advancedOptions = {
    userFunctions: {
      actionColumnFunctions: [
        {
          name: 'RenderMultiplyButtonFunc',
          func: params => {
            if (
              !params.data ||
              !params.data.ItemCost ||
              !params.data.Employee
            ) {
              return '';
            }
            let itemCost: number = params.data.ItemCost;
            if (params.data.Employee == 'Margaret Peacock') {
              return '';
            }

            return itemCost > 75
              ? '<button class="doublebutton">Double</button>'
              : '<button class="treblebutton">Treble</button>';
          },
        },
      ],
    },
  };

  const blotterOptionsClone = cloneDeep(blotterOptions);
  adaptableBlotter = new AdaptableBlotter(blotterOptions);

  adaptableBlotter.api.eventApi
    .onActionColumnClicked()
    .Subscribe((sender, actionColumnEventArgs) =>
      onActionColumnClicked(actionColumnEventArgs)
    );

  return {
    predefinedConfig,
    blotterOptions: blotterOptionsClone,
  };

  function onActionColumnClicked(
    actionColumnEventArgs: ActionColumnClickedEventArgs
  ) {
    let rowData = actionColumnEventArgs.rowData;
    if (actionColumnEventArgs.actionColumn.ColumnId == 'Plus') {
      let itemCount = rowData.ItemCount;
      adaptableBlotter.api.gridApi.setValue(
        actionColumnEventArgs.primaryKeyValue,
        'ItemCount',
        itemCount + 1
      );
    } else if (actionColumnEventArgs.actionColumn.ColumnId == 'Minus') {
      let itemCount = rowData.ItemCount;
      adaptableBlotter.api.gridApi.setValue(
        actionColumnEventArgs.primaryKeyValue,
        'ItemCount',
        itemCount - 1
      );
    } else if (actionColumnEventArgs.actionColumn.ColumnId == 'Multiply') {
      let multiplier: number = rowData.ItemCost > 75 ? 2 : 3;
      let newItemCost = rowData.ItemCost * multiplier;
      newItemCost = Math.round(newItemCost * 100) / 100;
      adaptableBlotter.api.gridApi.setValue(
        actionColumnEventArgs.primaryKeyValue,
        'ItemCost',
        newItemCost
      );
    }
  }
};
