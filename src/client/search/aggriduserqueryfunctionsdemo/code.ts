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
  ExpressionContext,
} from '@adaptabletools/adaptable/types';
import { AllEnterpriseModules } from '@ag-grid-enterprise/all-modules';
// Make sure to import this object as it will be referenced in expressionFunctions
import { AdaptableExpressionFunctions } from '@adaptabletools/adaptable/agGrid';

var adaptableApi: AdaptableApi;

const demoConfig: PredefinedConfig = {
  Query: {
    CurrentQuery:
      'IN_BUSINESS_YEAR([OrderDate]) AND IN_BUSINESS_YEAR([ShippedDate])',
  },
  CalculatedColumn: {
    CalculatedColumns: [
      {
        ColumnId: 'OrderCostGBP',
        FriendlyName: 'Order Cost GBP',
        ColumnExpression: 'GBP_PRICE([OrderCost])',
      },
      {
        ColumnId: 'PackageCostGBP',
        FriendlyName: 'Package Cost GBP',
        ColumnExpression: 'GBP_PRICE([PackageCost])',
      },
    ],
  },
  Layout: {
    CurrentLayout: 'QueryLayout',
    Layouts: [
      {
        Columns: [
          'OrderId',
          'ShipVia',
          'ItemCount',
          'OrderCostGBP',
          'OrderCost',
          'PackageCostGBP',
          'PackageCost',
          'CompanyName',
          'ChangeLastOrder',
        ],
        Name: 'QueryLayout',
      },
    ],
  },
  FormatColumn: {
    FormatColumns: [
      {
        Scope: {
          ColumnIds: ['OrderCostGBP', 'PackageCostGBP'],
        },
        DisplayFormat: {
          Formatter: 'NumberFormatter',
          Options: {
            FractionDigits: 2,
            Prefix: '£',
          },
        },
        CellAlignment: 'Right',
      },
    ],
  },
  Dashboard: {
    Tabs: [
      {
        Name: 'Search',
        Toolbars: ['Query'],
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
    statusBar: {
      statusPanels: [
        { statusPanel: 'agTotalRowCountComponent', align: 'left' },
        { statusPanel: 'agFilteredRowCountComponent' },
      ],
    },
  };

  const adaptableOptions: AdaptableOptions = {
    primaryKey: 'OrderId',
    userName: 'Demo User',
    adaptableId: 'User Query Functions Demo',
    queryOptions: {
      expressionFunctions: {
        ...AdaptableExpressionFunctions,
        IN_BUSINESS_YEAR: {
          handler(args: any[]) {
            const dateToCheck: Date = args[0]; // normally do type checking here!
            const businessYear: Date = new Date(2020, 5, 1);
            return dateToCheck > businessYear;
          },
          isPredicate: true,
          description: 'Returns true if Date is in current business year',
          signatures: ['IN_BUSINESS_YEAR(dateToCheck: Date)'],
          examples: ['IN_BUSINESS_YEAR([tradeDate])'],
        },
        GBP_PRICE: {
          handler(args: any[], context: ExpressionContext) {
            const shippingCompany = context.node.data['ShipVia'];
            return mockCurrencyConverterService.getSterlingPrice(
              args[0],
              shippingCompany
            );
          },
          description: 'Converts USD price to GBP (via mock service)',
          signatures: ['GBP_PRICE(dollarPrice: number)'],
          examples: ['GBP_PRICE([ItemCost])'],
        },
      },
    },
    predefinedConfig: demoConfig,
    vendorGrid: { ...gridOptions, modules: AllEnterpriseModules },
  };
  adaptableApi = await Adaptable.init(adaptableOptions);

  return { adaptableOptions, adaptableApi };
};

let mockCurrencyConverterService = {
  getSterlingPrice: (dollarPrice: number, shipVia: string) => {
    // will get externally and do properly in real life scenario
    return shipVia == 'United Package'
      ? dollarPrice * 1.36
      : dollarPrice * 1.45;
  },
};
