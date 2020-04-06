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
} from '@adaptabletools/adaptable/types';
import { AllEnterpriseModules } from '@ag-grid-enterprise/all-modules';

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
    adaptableId: 'Search Changed Demo',
    predefinedConfig: demoConfig,
    vendorGrid: { ...gridOptions, modules: AllEnterpriseModules },
  };
  adaptableApi = Adaptable.init(adaptableOptions);

  adaptableApi.eventApi.on(
    'SearchChanged',
    (searchChangedArgs: SearchChangedEventArgs) => {
      console.log('search changed event ran');
      console.log(searchChangedArgs.data[0].id);
    }
  );

  return { adaptableOptions, adaptableApi };
};
