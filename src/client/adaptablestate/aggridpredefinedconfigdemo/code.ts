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
  Dashboard: {
    ModuleButtons: ['Dashboard', 'Query'],
    Tabs: [
      {
        Name: 'Toolbars',
        Toolbars: ['SmartEdit', 'Export', 'Layout', 'QuickSearch'],
      },
    ],
  },
  SmartEdit: {
    SmartEditValue: 10,
  },
  Export: {
    CurrentReport: 'High Freight',
    Reports: [
      {
        Name: 'High Freight',
        ReportColumnScope: 'ScopeColumns',
        ReportRowScope: 'ExpressionRows',
        Scope: {
          ColumnIds: [
            'OrderId',
            'Freight',
            'Employee',
            'PackageCost',
            'InvoicedCost',
          ],
        },
        Query: {
          BooleanExpression: '[Freight] > 500',
        },
      },
    ],
  },
  CustomSort: {
    CustomSorts: [
      {
        ColumnId: 'Employee',
        SortedValues: [
          'Margaret Peacock',
          'Steven Buchanan',
          'Janet Leverling',
        ],
      },
    ],
  },
  ConditionalStyle: {
    ConditionalStyles: [
      {
        Scope: {
          DataTypes: ['Number'],
        },
        Style: {
          ForeColor: '#008000',
        },
        Rule: {
          Predicate: {
            Id: 'Positive',
          },
        },
      },
      {
        Scope: {
          DataTypes: ['Number'],
        },
        Style: {
          ForeColor: '#ff0000',
        },
        Rule: {
          Predicate: {
            PredicateId: 'Negative',
          },
        },
      },
      {
        Style: {
          BackColor: '#ffffcc',
          FontStyle: 'Italic',
          ForeColor: '#000000',
        },
        Scope: {
          All: true,
        },
        Rule: { BooleanExpression: '[InvoicedCost] > 2000' },
      },
    ],
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
          'Employee',
          'InvoicedCost',
          'ChangeLastOrder',
          'OrderCost',
          'PackageCost',
          'ItemCost',
          'ItemCount',
        ],
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
        ColumnSorts: [
          {
            ColumnId: 'ShipName',
            SortOrder: 'Asc',
          },
        ],
        Name: 'Shipping View',
      },
    ],
  },
  FormatColumn: {
    FormatColumns: [
      {
        Scope: {
          ColumnIds: ['OrderId'],
        },
        Style: {
          BackColor: '#d4fb79',
          ForeColor: '#8b0000',
          FontWeight: 'Normal',
          FontStyle: 'Normal',
        },
      },
    ],
  },
  QuickSearch: {
    QuickSearchText: 'g',
    Style: {
      BackColor: '#ffff00',
      ForeColor: '#8b0000',
    },
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
    adaptableId: 'Predefined Config Demo',
    predefinedConfig: demoConfig,
    vendorGrid: { ...gridOptions, modules: AllEnterpriseModules },
  };
  adaptableApi = await Adaptable.init(adaptableOptions);

  return { adaptableOptions, adaptableApi };
};
