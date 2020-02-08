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
    VisibleToolbars: ['ColumnFilter', 'Layout', 'QuickSearch'],
  },
  ConditionalStyle: {
    ConditionalStyles: [
      {
        ColumnId: '',
        ColumnCategoryId: '',
        Style: {
          BackColor: '#87cefa',
        },
        ConditionalStyleScope: 'Row',
        Expression: {
          ColumnValueExpressions: [
            {
              ColumnId: 'currency',
              ColumnDisplayValues: ['EUR', 'GBP', 'USD'],
            },
          ],
        },
      },
    ],
  },
  Layout: {
    CurrentLayout: 'Data Source',
    Layouts: [
      {
        Columns: [
          'tradeId',
          'notional',
          'country',
          'counterparty',
          'changeOnYear',
          'currency',
          'bidOfferSpread',
          'price',
          'ask',
          'bid',
          'sandpRating',
          'deskId',
          'bloombergAsk',
          'lastUpdated',
          'lastUpdatedBy',
        ],
        ColumnSorts: [{ Column: 'tradeId', SortOrder: 'Descending' }],
        Name: 'Data Source',
      },
    ],
  },
  ColumnFilter: {
    ColumnFilters: [
      {
        Filter: {
          RangeExpressions: [
            {
              ColumnId: 'counterparty',
              Ranges: [
                {
                  Operand1: 'm',
                  Operand1Type: 'Value',
                  Operand2: '',
                  Operand2Type: 'Value',
                  Operator: 'Contains',
                },
              ],
            },
          ],
        },
        ColumnId: 'counterparty',
      },
    ],
  },
  QuickSearch: {
    QuickSearchText: 'i*',
  },
} as PredefinedConfig;

export default (columnDefs: any[], rowData: any[]) => {
  let gridOptions: GridOptions = {
    columnDefs,
    rowData,
    enableRangeSelection: true,
    sideBar: true,
    suppressMenuHide: true,
    floatingFilter: true,
    statusBar: {
      statusPanels: [
        { statusPanel: 'agTotalRowCountComponent', align: 'left' },
        { statusPanel: 'agFilteredRowCountComponent' },
      ],
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
    primaryKey: 'tradeId',
    userName: 'Demo User',
    adaptableId: 'DataSource Changes Demo',
    predefinedConfig: demoConfig,
    vendorGrid: { ...gridOptions, modules: AllEnterpriseModules },
  };
  adaptableApi = Adaptable.init(adaptableOptions);

  return { adaptableOptions, adaptableApi };
};
