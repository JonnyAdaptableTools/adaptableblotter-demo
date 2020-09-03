import '@adaptabletools/adaptable/index.css';
import '@adaptabletools/adaptable/themes/dark.css';
import '@ag-grid-community/all-modules/dist/styles/ag-grid.css';
import '@ag-grid-community/all-modules/dist/styles/ag-theme-balham.css';
import '@ag-grid-community/all-modules/dist/styles/ag-theme-balham-dark.css';
import Adaptable from '@adaptabletools/adaptable/agGrid';
import { GridOptions } from '@ag-grid-community/all-modules';
import {
  AdaptableOptions,
  PredefinedConfig,
  AdaptableApi,
  AdaptableFunctionName,
  AccessLevel,
} from '@adaptabletools/adaptable/types';
import { AllEnterpriseModules } from '@ag-grid-enterprise/all-modules';

var adaptableApi: AdaptableApi;

const demoConfig: PredefinedConfig = {
  Dashboard: {
    Tabs: [
      {
        Name: 'Toolbars',
        Toolbars: ['Export', 'Layout'],
      },
    ],
  },
  Entitlements: {
    EntitlementLookUpFunction: 'entitlementServerLookUpFunction',
  },
  Layout: {
    CurrentLayout: 'Orders View',
    Layouts: [
      {
        Columns: [
          'OrderId',
          'OrderDate',
          'CustomerReference',
          'CompanyName',
          'ContactName',
          'InvoicedCost',
          'ChangeLastOrder',
          'OrderCost',
          'PackageCost',
          'ItemCost',
          'ItemCount',
        ],
        ColumnSorts: [],
        Name: 'Orders View',
      },
      {
        Columns: [
          'OrderId',
          'ShipVia',
          'Freight',
          'ShipName',
          'ShipCountry',
          'ShippedDate',
          'CustomerReference',
        ],
        ColumnSorts: [],
        Name: 'Shipping View',
      },
    ],
  },
  Export: {
    CurrentReport: 'My Team Big Invoice',
    Reports: [
      {
        Expression: {
          ColumnValueExpressions: [
            {
              ColumnId: 'Employee',
              ColumnDisplayValues: [
                'Robert King',
                'Margaret Peacock',
                'Anne Dodsworth',
              ],
            },
          ],
          RangeExpressions: [
            {
              ColumnId: 'InvoicedCost',
              Ranges: [
                {
                  Operator: 'GreaterThan',
                  Operand1: '1000',
                  Operand1Type: 'Value',
                },
              ],
            },
          ],
        },
        Name: 'My Team Big Invoice',
        ReportColumnScope: 'AllColumns',
        ReportRowScope: 'ExpressionRows',
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
    adaptableId: 'Entitlements Function Demo',
    userFunctions: [
      {
        type: 'EntitlementLookUpFunction',
        name: 'entitlementServerLookUpFunction',
        handler(
          functionName: AdaptableFunctionName,
          userName: string,
          adaptableId: string
        ) {
          switch (functionName) {
            // We want a readonly grid so lets hide all editing functions
            case 'BulkUpdate':
            case 'CellValidation':
            case 'PlusMinus':
            case 'SmartEdit':
            case 'Shortcut':
              return 'Hidden';
            case 'Query':
            case 'Export':
            case 'Layout':
              return getMockPermissionServerResult(
                functionName,
                userName,
                adaptableId
              );
          }
        },
      },
    ],
    predefinedConfig: demoConfig,
    vendorGrid: { ...gridOptions, modules: AllEnterpriseModules },
  };
  adaptableApi = await Adaptable.init(adaptableOptions);

  return { adaptableOptions, adaptableApi };
};

function getMockPermissionServerResult(
  functionName: AdaptableFunctionName,
  userName: string,
  adaptableId: string
): AccessLevel {
  return 'ReadOnly';
}
