import '@adaptabletools/adaptable/index.css';
import '@adaptabletools/adaptable/themes/dark.css';
import '@ag-grid-community/all-modules/dist/styles/ag-grid.css';
import '@ag-grid-community/all-modules/dist/styles/ag-theme-balham.css';
import '@ag-grid-community/all-modules/dist/styles/ag-theme-balham-dark.css';
import './actioncolumn.css';
import '../../../../DemoPage/aggriddemo.css';
import Adaptable from '@adaptabletools/adaptable/agGrid';
import { GridOptions } from '@ag-grid-community/all-modules';
import {
  AdaptableOptions,
  PredefinedConfig,
  AdaptableApi,
  ActionColumnClickedEventArgs,
  ActionColumnClickedInfo,
} from '@adaptabletools/adaptable/types';
import { AllEnterpriseModules } from '@ag-grid-enterprise/all-modules';

var adaptableApi: AdaptableApi;

const demoConfig: PredefinedConfig = {
  ActionColumn: {
    ActionColumns: [
      {
        ColumnId: 'Multiply',
        ButtonText: 'Click',
        ShouldRenderPredicate: params => {
          //   return params.rowData.counterparty != 'BNP';
          return params.rowData.Employee != 'Margaret Peacock';
        },
        RenderFunction: params => {
          return params.rowData.ItemCost > 75
            ? '<button style="color:blue; font-weight:bold">Double</button>'
            : '<button style="color:red; font-weight:bold; font-style:italic">Treble</button>';
        },
      },
      {
        ColumnId: 'Plus',
        ButtonText: '+',
      },
      {
        ColumnId: 'Minus',
        ButtonText: '-',
      },
      {
        ColumnId: 'Action',
        ButtonText: 'Delete Row',
      },
    ],
  },
  Layout: {
    CurrentLayout: 'Action Cols',
    Layouts: [
      {
        Columns: [
          'OrderId',
          'ItemCost',
          'Multiply',
          'CompanyName',
          'Plus',
          'ItemCount',
          'Minus',
          'Employee',
          'Action',
        ],
        ColumnSorts: [],
        Name: 'Action Cols',
      },
    ],
  },
} as PredefinedConfig;

export default (columnDefs: any[], rowData: any[]) => {
  const gridOptions: GridOptions = {
    columnDefs,
    rowData,
    enableRangeSelection: true,
    sideBar: true,
    suppressMenuHide: true,
    floatingFilter: true,
    columnTypes: {
      abColDefNumber: {},
      abColDefString: {},
      abColDefBoolean: {},
      abColDefDate: {},
      abColDefObject: {},
      abColDefNumberArray: {},
    },
  };

  const adaptableOptions: AdaptableOptions = {
    primaryKey: 'OrderId',
    userName: 'Demo User',
    adaptableId: 'Action Column Demo',
    predefinedConfig: demoConfig,
    vendorGrid: { ...gridOptions, modules: AllEnterpriseModules },
  };
  adaptableApi = Adaptable.init(adaptableOptions);

  adaptableApi.eventApi.on(
    'ActionColumnClicked',
    (actionColumnEventArgs: ActionColumnClickedEventArgs) => {
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
  );

  return { adaptableOptions, adaptableApi };
};
