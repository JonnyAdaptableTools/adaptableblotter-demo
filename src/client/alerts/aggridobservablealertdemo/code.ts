import '@adaptabletools/adaptable/index.css';
import '@adaptabletools/adaptable/themes/dark.css';
import '@ag-grid-community/all-modules/dist/styles/ag-grid.css';
import '@ag-grid-community/all-modules/dist/styles/ag-theme-balham.css';
import '@ag-grid-community/all-modules/dist/styles/ag-theme-balham-dark.css';
import Adaptable from '@adaptabletools/adaptable/agGrid';
import { GridOptions, RowNode } from '@ag-grid-community/all-modules';
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
  Dashboard: {
    Tabs: [
      {
        Name: 'Toolbars',
        Toolbars: ['Alert', 'CellSummary', 'Export', 'Layout'],
      },
    ],
  },
  Alert: {
    AlertDefinitions: [
      {
        MessageType: 'Info',
        Scope: { All: true },
        Rule: {
          ObservableExpression:
            " ROW_CHANGE(COUNT([ItemCount],3) ,TIMEFRAME('5m'))    ",
        },
        AlertProperties: {
          DisplayNotification: true,
        },
      },
      {
        MessageType: 'Success',
        Scope: { All: true },
        Rule: {
          ObservableExpression:
            " ROW_CHANGE( MAX([OrderCost] ),  TIMEFRAME('1h')) WHERE [Employee] = 'Margaret Peacock' ",
        },
        AlertProperties: {
          DisplayNotification: true,
        },
      },
    ],
    FlashingAlertDefinitions: [
      {
        Scope: {
          DataTypes: ['Number'],
        },
        Rule: {
          Predicate: {
            PredicateId: 'Any',
          },
        },
      },
    ],
  },
  Layout: {
    CurrentLayout: 'Simple Layout',
    Layouts: [
      {
        Name: 'Simple Layout',
        Columns: [
          'OrderId',
          'increaseItemCount',
          'ItemCount',
          'Employee',
          'increaseOrderCost',
          'OrderCost',
          'decreaseOrderCost',
          'CompanyName',
          'ContactName',
          'ItemCost',
          'InvoicedCost',
          'ChangeLastOrder',
          'PackageCost',
        ],
      },
    ],
  },
} as PredefinedConfig;

export default async (columnDefs: any[], rowData: any[]) => {
  let gridOptions: GridOptions = {
    columnDefs,
    rowData,
    animateRows: true,
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
    adaptableId: 'Observable Alert Demo',
    userInterfaceOptions: {
      actionColumns: [
        {
          columnId: 'increaseItemCount',
          friendlyName: 'Increment',
          actionColumnButton: {
            label: '+',
            buttonStyle: {
              tone: 'neutral',
              variant: 'raised',
            },
            onClick: (
              button: AdaptableButton,
              context: ActionColumnButtonContext
            ) => {
              incrementCellValue('ItemCount', context, 1);
            },
          },
        },
        {
          columnId: 'increaseOrderCost',
          friendlyName: 'Increment',
          actionColumnButton: {
            label: '+',
            buttonStyle: {
              tone: 'neutral',
              variant: 'raised',
            },
            onClick: (
              button: AdaptableButton,
              context: ActionColumnButtonContext
            ) => {
              incrementCellValue('OrderCost', context, 1);
            },
          },
        },
        {
          columnId: 'decreaseOrderCost',
          friendlyName: 'Decrement',
          actionColumnButton: {
            label: '-',
            buttonStyle: {
              tone: 'neutral',
              variant: 'raised',
            },
            onClick: (
              button: AdaptableButton,
              context: ActionColumnButtonContext
            ) => {
              incrementCellValue('OrderCost', context, -3);
            },
          },
        },
      ],
    },
    searchOptions: {
      quickFilterTrigger: 'click',
    },
    predefinedConfig: demoConfig,
    vendorGrid: { ...gridOptions, modules: AllEnterpriseModules },
  };
  adaptableApi = await Adaptable.init(adaptableOptions);

  return { adaptableOptions, adaptableApi };
};

export function incrementCellValue(
  columnName: string,
  context: ActionColumnButtonContext,
  incrementValue: number
): void {
  const currentItemCount = context.rowNode.data[columnName];
  adaptableApi.gridApi.setCellValue(
    columnName,
    currentItemCount + incrementValue,
    context.primaryKeyValue,
    false
  );
}
