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
  ActionColumnButtonContext,
  AdaptableButton,
} from '@adaptabletools/adaptable/types';
import { AllEnterpriseModules } from '@ag-grid-enterprise/all-modules';

var adaptableApi: AdaptableApi;

const demoConfig: PredefinedConfig = {
  Dashboard: {
    Tabs: [
      {
        Name: 'Toolbars',
        Toolbars: ['Alert'],
      },
    ],
  },
  Alert: {
    AlertDefinitions: [
      {
        MessageType: 'Warning',
        Scope: { All: true },
        Rule: {
          AggregationExpression:
            " SUM([ItemCount]) > '2K' WHERE [Employee] = 'Margaret Peacock'  ",
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
          'ItemCount',
          'increaseItemCount',
          'Employee',
          'CompanyName',
          'ContactName',
          'ItemCost',
          'InvoicedCost',
          'ChangeLastOrder',
          'PackageCost',
        ],
        RowGroupedColumns: ['Employee'],
        AggregationColumns: {
          ItemCount: 'sum',
        },
      },
    ],
  },
  FormatColumn: {
    FormatColumns: [
      {
        Scope: {
          ColumnIds: ['ItemCount'],
        },
        DisplayFormat: {
          Formatter: 'NumberFormatter',
          Options: {
            FractionDigits: 4,
          },
        },
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
    adaptableId: 'Aggregation Alert Demo',
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
              incrementCellValue('ItemCount', context, 150);
            },
          },
        },
      ],
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
