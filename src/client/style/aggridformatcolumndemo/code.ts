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
    VisibleButtons: ['FormatColumn'],
  },
  FormatColumn: {
    FormatColumns: [
      // Set a Style for OrderId
      {
        Scope: {
          ColumnIds: ['OrderId'],
        },
        Style: {
          BackColor: '#d4fb79',
          ForeColor: '#8b0000',
        },
      },
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
    ],
  },
  UserInterface: {
    PermittedValuesItems: [
      {
        Scope: {
          ColumnIds: ['LastUpdatedTime'],
        },
        PermittedValues: [''],
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
    adaptableId: 'Format Col Demo',
    predefinedConfig: demoConfig,
    vendorGrid: { ...gridOptions, modules: AllEnterpriseModules },
  };
  adaptableApi = await Adaptable.init(adaptableOptions);

  return { adaptableOptions, adaptableApi };
};
