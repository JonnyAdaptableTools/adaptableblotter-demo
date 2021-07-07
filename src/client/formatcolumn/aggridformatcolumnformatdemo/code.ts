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
    ModuleButtons: ['FormatColumn'],
  },
  FormatColumn: {
    FormatColumns: [
      // Set a Time-based Display Format for LastUpdatedTime
      {
        Scope: {
          ColumnIds: ['LastUpdatedTime'],
        },
        DisplayFormat: {
          Formatter: 'DateFormatter',
          Options: {
            Pattern: 'HH:mm:ss',
          },
        },
      },
      // Set both a Style and a (Date-based) Display Format for OrderDate
      {
        Scope: {
          ColumnIds: ['OrderDate'],
        },
        Style: {
          FontWeight: 'Bold',
          FontSize: 'XSmall',
          FontStyle: 'Italic',
        },
        DisplayFormat: {
          Formatter: 'DateFormatter',
          Options: {
            Pattern: 'yyyyMMdd',
          },
        },
      },
      // Set a Display Format of negative parentheses for ChangeLastOrder
      {
        Scope: {
          ColumnIds: ['ChangeLastOrder'],
        },
        DisplayFormat: {
          Formatter: 'NumberFormatter',
          Options: {
            Parentheses: true,
          },
        },
        CellAlignment: 'Center',
      },
      // Set a Display Format of £ and 2 dp for InvoicedCost
      {
        Scope: {
          ColumnIds: ['InvoicedCost'],
        },
        DisplayFormat: {
          Formatter: 'NumberFormatter',
          Options: {
            FractionDigits: 2,
            Prefix: '£',
          },
        },
      },
      // Set a Display Format of $ with 'AUD' suffix and space for integer separator for OrderCost
      {
        Scope: {
          ColumnIds: ['OrderCost'],
        },
        DisplayFormat: {
          Formatter: 'NumberFormatter',
          Options: {
            FractionDigits: 2,
            IntegerSeparator: ' ',
            Prefix: '$',
            Suffix: '(AUD)',
          },
        },
      },
      // Set a Display Format Upper Case for ShipCountry Column
      {
        Scope: {
          ColumnIds: ['ShipCountry'],
        },
        DisplayFormat: {
          Formatter: 'StringFormatter',
          Options: {
            Case: 'Upper',
          },
        },
      },
    ],
  },

  Layout: {
    CurrentLayout: 'Format Layout',
    Layouts: [
      {
        Name: 'Format Layout',
        Columns: [
          'OrderId',
          'ShipCountry',
          'InvoicedCost',
          'OrderCost',
          'ChangeLastOrder',
          'LastUpdatedTime',
          'OrderDate',
          'ContactName',
          'RequiredDate',
        ],
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
    adaptableId: 'Format Column Formatter Demo',
    userInterfaceOptions: {
      permittedValues: [
        {
          scope: {
            ColumnIds: ['LastUpdatedTime'],
          },
          values: [''],
        },
      ],
    },
    predefinedConfig: demoConfig,
    vendorGrid: { ...gridOptions, modules: AllEnterpriseModules },
  };
  adaptableApi = await Adaptable.init(adaptableOptions);

  return { adaptableOptions, adaptableApi };
};
