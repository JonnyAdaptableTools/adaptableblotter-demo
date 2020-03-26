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
  SearchChangedEventArgs,
  AdaptableReadyInfo,
} from '@adaptabletools/adaptable/types';
import { AllEnterpriseModules } from '@ag-grid-enterprise/all-modules';
import { ColumnFilter } from '@adaptabletools/adaptable/src/PredefinedConfig/ColumnFilterState';

var adaptableApi: AdaptableApi;

const demoConfig: PredefinedConfig = {
  Dashboard: {
    Revision: 15,
    Tabs: [
      {
        Name: 'Search',
        Toolbars: ['AdvancedSearch', 'ColumnFilter', 'QuickSearch'],
      },
      {
        Name: 'Grid',
        Toolbars: ['Layout', 'Export', 'CellSummary', 'SystemStatus', 'Chart'],
      },
    ],
  },
  QuickSearch: {
    QuickSearchText: 'l',
  },
  AdvancedSearch: {
    AdvancedSearches: [
      {
        Expression: {
          RangeExpressions: [
            {
              ColumnId: 'InvoicedCost',
              Ranges: [
                {
                  Operand1: '1200',
                  Operand1Type: 'Value',
                  Operator: 'GreaterThan',
                },
              ],
            },
          ],
        },
        Name: 'High Invoices',
      },
    ],
    CurrentAdvancedSearch: 'High Invoices',
  },
  ColumnFilter: {
    ColumnFilters: [
      {
        Filter: {
          ColumnValueExpressions: [
            {
              ColumnDisplayValues: [
                'Janet Leverling',
                'Margaret Peacock',
                'Nancy Davolio',
              ],
              ColumnId: 'Employee',
            },
          ],
        },
        ColumnId: 'Employee',
      },
      {
        Filter: {
          FilterExpressions: [
            {
              ColumnId: 'ChangeLastOrder',
              Filters: ['Positive'],
            },
          ],
        },
        ColumnId: 'ChangeLastOrder',
      },
    ],
  },
} as PredefinedConfig;

export default (columnDefs: any[], rowData: any[]) => {
  const gridOptions: GridOptions = {
    columnDefs,
    rowData,
    enableRangeSelection: true,
    sideBar: true,
    suppressMenuHide: true,
    floatingFilter: true,
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
    adaptableId: 'Adaptable Ready Demo',
    predefinedConfig: demoConfig,
    vendorGrid: { ...gridOptions, modules: AllEnterpriseModules },
  };
  adaptableApi = Adaptable.init(adaptableOptions);

  adaptableApi.eventApi.on(
    'AdaptableReady',
    (adaptableReadyInfo: AdaptableReadyInfo) => {
      let columnFilter: ColumnFilter = {
        ColumnId: 'Order Date',
        Filter: {
          RangeExpressions: [
            {
              ColumnId: 'Order Date',
              Ranges: [
                {
                  Operator: 'LessThan',
                  Operand1: new Date().toString(),
                },
              ],
            },
          ],
        },
      };
      adaptableApi.columnFilterApi.setColumnFilter([columnFilter]);
    }
  );

  return { adaptableOptions, adaptableApi };
};
