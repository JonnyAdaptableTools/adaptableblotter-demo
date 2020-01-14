import { PredefinedConfig } from '@adaptabletools/adaptable/types';

export default {
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
