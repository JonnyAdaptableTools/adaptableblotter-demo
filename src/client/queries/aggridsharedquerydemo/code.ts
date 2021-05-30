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
} from '@adaptabletools/adaptable/types';
import { AllEnterpriseModules } from '@ag-grid-enterprise/all-modules';

var adaptableApi: AdaptableApi;

const demoConfig: PredefinedConfig = {
  Query: {
    SharedQueries: [
      {
        Name: 'Non UP Shipping',
        BooleanExpression: '[ShipVia] != "United Package" ',
      },
      {
        Name: 'Big Changed Orders',
        BooleanExpression: '[ChangeLastOrder] > 10 AND [PackageCost] > 10',
      },
    ],
  },
  Export: {
    CurrentReport: 'Big Orders',
    Reports: [
      {
        Name: 'Big Orders',
        ReportColumnScope: 'AllColumns',
        ReportRowScope: 'ExpressionRows',
        Query: {
          BooleanExpression: 'QUERY("Big Changed Orders") AND [ItemCount] > 3',
        },
      },
    ],
  },
  ConditionalStyle: {
    ConditionalStyles: [
      {
        Scope: {
          All: true,
        },
        Style: {
          BackColor: '#FED8B1',
        },
        Rule: {
          BooleanExpression: " QUERY('Non UP Shipping')",
        },
      },
    ],
  },

  Layout: {
    CurrentLayout: 'QueryLayout',
    Layouts: [
      {
        Columns: [
          'OrderId',
          'CustomerReference',
          'ContactName',
          'ShipCountry',
          'ChangeLastOrder',
          'ShipVia',
          'ItemCount',
          'OrderCost',
          'PackageCost',
          'Employee',
          'CompanyName',
        ],
        ColumnSorts: [
          {
            ColumnId: 'CustomerReference',
            SortOrder: 'Asc',
          },
        ],
        Name: 'QueryLayout',
      },
    ],
  },
  Dashboard: {
    Tabs: [
      {
        Name: 'Search',
        Toolbars: ['Query', 'Export'],
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
    adaptableId: 'Shared Query Demo',
    predefinedConfig: demoConfig,
    vendorGrid: { ...gridOptions, modules: AllEnterpriseModules },
  };
  adaptableApi = await Adaptable.init(adaptableOptions);

  return { adaptableOptions, adaptableApi };
};
