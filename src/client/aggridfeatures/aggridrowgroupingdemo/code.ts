import '@adaptabletools/adaptable/index.css';
import '@ag-grid-community/all-modules/dist/styles/ag-grid.css';
import '@ag-grid-community/all-modules/dist/styles/ag-theme-balham.css';
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
  Layout: {
    CurrentLayout: 'Grouped',
    Layouts: [
      {
        Columns: [
          'CustomerReference',
          'ContactName',
          'InvoicedCost',
          'ChangeLastOrder',
          'ItemCount',
          'OrderCost',
          'PackageCost',
          'Employee',
          'ShipCountry',
        ],
        RowGroupedColumns: ['Employee'],
        AggregationColumns: {
          InvoicedCost: 'sum',
          OrderCost: 'sum',
          ItemCount: 'max',
        },
        Name: 'Grouped',
      },
    ],
  },
  FormatColumn: {
    FormatColumns: [
      {
        Scope: {
          ColumnIds: ['InvoicedCost', 'OrderCost'],
        },
        DisplayFormat: {
          Formatter: 'NumberFormatter',
          Options: {
            FractionDigits: 2,
          },
        },
      },
      {
        Scope: {
          ColumnIds: ['ItemCost'],
        },
        DisplayFormat: {
          Formatter: 'NumberFormatter',
          Options: {
            FractionDigits: 4,
            FractionSeparator: '.',
            IntegerDigits: 0,
            IntegerSeparator: ',',
            Multiplier: 1,
            Parentheses: false,
            Prefix: '',
            Suffix: '',
          },
        },
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
    groupIncludeTotalFooter: true,
    groupIncludeFooter: true,
    suppressAggFuncInHeader: true,
    rowGroupPanelShow: 'always',
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
    adaptableId: 'Row Grouping Demo',
    predefinedConfig: demoConfig,
    generalOptions: {
      showGroupingTotalsAsHeader: true,
    },
    vendorGrid: { ...gridOptions, modules: AllEnterpriseModules },
  };
  adaptableApi = await Adaptable.init(adaptableOptions);
  return { adaptableOptions, adaptableApi };
};
