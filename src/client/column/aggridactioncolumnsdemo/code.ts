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
  AdaptableButton,
  ActionColumnButtonContext,
} from '@adaptabletools/adaptable/types';
import { AllEnterpriseModules } from '@ag-grid-enterprise/all-modules';

var adaptableApi: AdaptableApi;

const demoConfig: PredefinedConfig = {
  ActionColumn: {
    Revision: Date.now(),
    ActionColumns: [
      {
        ColumnId: 'Multiply',
        ActionColumnButton: {
          Label: 'Click',
          ButtonClickedFunction: 'multiplyButtonClicked',
          ButtonRenderPredicate: 'shouldRenderMultiplyPredicate',
          //  RenderFunction: 'renderMultiplyFunction',
          ButtonStyle: {
            Variant: 'raised',
            Tone: 'accent',
          },
        },
      },
      {
        ColumnId: 'Plus',
        ActionColumnButton: {
          Label: '+',
          ButtonClickedFunction: 'addButtonClicked',
          ButtonStyle: {
            Variant: 'raised',
            Tone: 'neutral',
          },
        },
      },
      {
        ColumnId: 'Minus',
        ActionColumnButton: {
          Label: '-',
          ButtonClickedFunction: 'subtractButtonClicked',
          ButtonStyle: {
            Variant: 'raised',
            Tone: 'neutral',
          },
        },
      },
      {
        ColumnId: 'Action',
        ActionColumnButton: {
          Label: 'Delete Row',
          ButtonClickedFunction: 'deleteButtonClicked',
          ButtonStyle: {
            Variant: 'outlined',
            Tone: 'neutral',
          },
        },
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
        type: 'ButtonClickedFunction',
        name: 'multiplyButtonClicked',
        handler(button: AdaptableButton, context: ActionColumnButtonContext) {
          let rowData: any = context.rowNode?.data;
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
            context.primaryKeyValue,
            true
          );
        },
      },
      {
        type: 'ButtonClickedFunction',
        name: 'addButtonClicked',
        handler(button: AdaptableButton, context: ActionColumnButtonContext) {
          let rowData: any = context.rowNode?.data;
          let itemCount = rowData.ItemCount;
          adaptableApi.gridApi.setCellValue(
            'ItemCount',
            itemCount + 1,
            context.primaryKeyValue,
            true
          );
        },
      },
      {
        type: 'ButtonClickedFunction',
        name: 'subtractButtonClicked',
        handler(button: AdaptableButton, context: ActionColumnButtonContext) {
          let rowData: any = context.rowNode?.data;
          let itemCount = rowData.ItemCount;
          adaptableApi.gridApi.setCellValue(
            'ItemCount',
            itemCount - 1,
            context.primaryKeyValue,
            true
          );
        },
      },
      {
        type: 'ButtonClickedFunction',
        name: 'deleteButtonClicked',
        handler(button: AdaptableButton, context: ActionColumnButtonContext) {
          adaptableApi.gridApi.deleteGridData([context.rowNode?.data]);
        },
      },
      /*
      {
        type: 'ActionColumnRenderFunction',
        name: 'renderMultiplyFunction',
        handler(params: ActionColumnRenderParams) {
          return params.rowData?.Employee == 'Robert King' ||
            params.rowData?.Employee == 'Janet Leverling'
            ? '<button style="color:blue; font-weight:bold">Double</button>'
            : '<button style="color:red; font-weight:bold; font-style:italic">Treble</button>';
        },
      },
      */
      {
        type: 'ButtonRenderPredicate',
        name: 'shouldRenderMultiplyPredicate',
        handler(button: AdaptableButton, context: ActionColumnButtonContext) {
          return context.rowNode?.data?.Employee != 'Margaret Peacock';
        },
      },
    ],
    predefinedConfig: demoConfig,
    vendorGrid: { ...gridOptions, modules: AllEnterpriseModules },
  };
  adaptableApi = await Adaptable.init(adaptableOptions);

  return { adaptableOptions, adaptableApi };
};
