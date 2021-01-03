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
  ActionColumnRenderParams,
} from '@adaptabletools/adaptable/types';
import { AllEnterpriseModules } from '@ag-grid-enterprise/all-modules';

var adaptableApi: AdaptableApi;

const demoConfig: PredefinedConfig = {
  ActionColumn: {
    ActionColumns: [
      {
        ColumnId: 'Multiply',
        ButtonText: 'Click',
        ShouldRenderPredicate: 'shouldRenderMultiplyPredicate',
        RenderFunction: 'renderMultiplyFunction',
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

export default async (columnDefs: any[], rowData: any[]) => {
  const gridOptions: GridOptions = {
    columnDefs,
    rowData,
    enableRangeSelection: true,
    sideBar: true,
    suppressMenuHide: true,
    autoGroupColumnDef: {
      sortable: true,
    },
  };

  const adaptableOptions: AdaptableOptions = {
    primaryKey: 'OrderId',
    userName: 'Demo User',
    adaptableId: 'Action Column Demo',
    userFunctions: [
      {
        type: 'ActionColumnRenderFunction',
        name: 'renderMultiplyFunction',
        handler(params: ActionColumnRenderParams) {
          return params.rowData.Employee == 'Robert King' ||
            params.rowData.Employee == 'Janet Leverling'
            ? '<button style="color:blue; font-weight:bold">Double</button>'
            : '<button style="color:red; font-weight:bold; font-style:italic">Treble</button>';
        },
      },
      {
        type: 'ActionColumnShouldRenderPredicate',
        name: 'shouldRenderMultiplyPredicate',
        handler(params) {
          return params.rowData.Employee != 'Margaret Peacock';
        },
      },
    ],
    predefinedConfig: demoConfig,
    vendorGrid: { ...gridOptions, modules: AllEnterpriseModules },
  };
  adaptableApi = await Adaptable.init(adaptableOptions);

  adaptableApi.eventApi.on(
    'ActionColumnClicked',
    (actionColumnEventArgs: ActionColumnClickedEventArgs) => {
      let actionColumnClickedInfo: ActionColumnClickedInfo =
        actionColumnEventArgs.data[0].id;
      let rowData: any = actionColumnClickedInfo.rowData;
      const column = actionColumnEventArgs.data[0].id.actionColumn;
      if (column.ColumnId == 'Plus') {
        let itemCount = rowData.ItemCount;
        adaptableApi.gridApi.setCellValue(
          'ItemCount',
          itemCount + 1,
          actionColumnClickedInfo.primaryKeyValue,
          true
        );
      } else if (column.ColumnId == 'Minus') {
        let itemCount = rowData.ItemCount;
        adaptableApi.gridApi.setCellValue(
          'ItemCount',
          itemCount - 1,
          actionColumnClickedInfo.primaryKeyValue,
          true
        );
      } else if (column.ColumnId == 'Multiply') {
        let multiplier: number =
          rowData.Employee == 'Robert King' ||
          rowData.Employee == 'Janet Leverling'
            ? 2
            : 3;
        let newItemCost = rowData.ItemCost * multiplier;
        newItemCost = Math.round(newItemCost * 100) / 100;
        adaptableApi.gridApi.setCellValue(
          'ItemCost',
          newItemCost,
          actionColumnClickedInfo.primaryKeyValue,
          true
        );
      } else if (column.ColumnId == 'Action') {
        adaptableApi.gridApi.deleteGridData([actionColumnClickedInfo.rowData]);
      }
    }
  );

  return { adaptableOptions, adaptableApi };
};
