import { PredefinedConfig } from '@adaptabletools/adaptable/types';

export default {
  Layout: {
    CurrentLayout: 'Orders',
    Layouts: [
      {
        Name: 'Orders',
        Columns: [
          'Order ID',
          'Account Code',
          'Side',
          'Amount',
          'Ticker',
          'Security Name',
          'Executed Shares',
          'Leaves',
          'Order Type',
          'Benchmark',
          'Account Name',
          'USD Principal',
          'Average Price',
          'Exchange Code',
          'Exchange Name',
          'Region',
          'Limit Price',
          'Time In Force',
          'Expiry Date',
          'Stop Price',
          'Locate Status',
          'Trader ID',
          'Trader Name',
          'Directed Order',
          'Cross Trade',
          'Trade Status',
          'Clearing Method',
          'Cancel Status',
          'Client Trader',
          'Client Notes',
          'TCA Notes',
          'TCA Exclude from LiquidMetrix',
          'TCA Include Premarket',
          'Date Created',
          'Client Comm Rate',
          'Client Comm Type',
          'Research Credit Rate',
          'Broker Code',
          'Broker Comm Rate',
          'Broker Comm Type',
          'Verified By',
          'Order Source',
          'High',
          'Low',
          'VWAP',
          'Arrival',
          'Closing Price',
          'Portfolio',
          'Execution Reason Code',
        ],
        ColumnSorts: [],
      },
    ],
  },
  Dashboard: {
    VisibleToolbars: [
      'Layout',
      'AdvancedSearch',
      'QuickSearch',
      'Export',
      'ColumnFilter',
    ],
  },
  AdvancedSearch: {
    AdvancedSearches: [
      {
        Name: 'SB',
        Expression: {
          ColumnValueExpressions: [
            {
              ColumnId: 'Trader ID',
              ColumnDisplayValues: ['SB'],
              ColumnRawValues: ['SB'],
            },
          ],
          FilterExpressions: [
            {
              ColumnId: 'Archive Flag',
              Filters: ['NotArchived'],
            },
            {
              ColumnId: 'Order Status',
              Filters: ['NotDeleted'],
            },
          ],
          RangeExpressions: [],
        },
      },
      {
        Name: 'Europe',
        Expression: {
          ColumnValueExpressions: [
            {
              ColumnId: 'Region',
              ColumnDisplayValues: ['EUROPE'],
              ColumnRawValues: ['EUROPE'],
            },
          ],
          FilterExpressions: [
            {
              ColumnId: 'Archive Flag',
              Filters: ['NotArchived'],
            },
            {
              ColumnId: 'Order Status',
              Filters: ['NotDeleted'],
            },
          ],
          RangeExpressions: [],
        },
      },
      {
        Name: 'Americas',
        Expression: {
          ColumnValueExpressions: [
            {
              ColumnId: 'Region',
              ColumnDisplayValues: ['AMERICAS'],
              ColumnRawValues: ['AMERICAS'],
            },
          ],
          FilterExpressions: [
            {
              ColumnId: 'Order Status',
              Filters: ['NotDeleted'],
            },
            {
              ColumnId: 'Archive Flag',
              Filters: ['NotArchived'],
            },
          ],
          RangeExpressions: [],
        },
      },
      {
        Name: 'Global',
        Expression: {
          ColumnValueExpressions: [],
          FilterExpressions: [
            {
              ColumnId: 'Archive Flag',
              Filters: ['NotArchived'],
            },
            {
              ColumnId: 'Order Status',
              Filters: ['NotDeleted'],
            },
          ],
          RangeExpressions: [],
        },
      },
      {
        Name: 'Archive',
        Expression: {
          ColumnValueExpressions: [],
          FilterExpressions: [
            {
              ColumnId: 'Order Status',
              Filters: ['NotDeleted'],
            },
          ],
          RangeExpressions: [],
        },
      },
    ],
    CurrentAdvancedSearch: 'Global',
  },
  ConditionalStyle: {
    ConditionalStyles: [
      {
        ColumnId: '',
        ColumnCategoryId: '',
        Style: {
          BackColor: '#80ffff',
          ForeColor: '#000000',
          FontWeight: 'Normal',
          FontStyle: 'Normal',
          ClassName: '',
        },
        ConditionalStyleScope: 'Row',
        Expression: {
          ColumnValueExpressions: [
            {
              ColumnId: 'Side',
              ColumnDisplayValues: ['BUY'],
              ColumnRawValues: ['BUY'],
            },
          ],
          FilterExpressions: [],
          RangeExpressions: [],
        },
      },
      {
        ColumnId: '',
        ColumnCategoryId: '',
        Style: {
          BackColor: '#ff8080',
          FontWeight: 'Normal',
          FontStyle: 'Normal',
          ClassName: '',
        },
        ConditionalStyleScope: 'Row',
        Expression: {
          ColumnValueExpressions: [
            {
              ColumnId: 'Side',
              ColumnDisplayValues: ['SELL'],
              ColumnRawValues: ['SELL'],
            },
          ],
          FilterExpressions: [],
          RangeExpressions: [],
        },
      },
      {
        ColumnId: '',
        ColumnCategoryId: '',
        Style: {
          BackColor: '#d7ffff',
          FontWeight: 'Normal',
          FontStyle: 'Normal',
          ClassName: '',
        },
        ConditionalStyleScope: 'Row',
        Expression: {
          ColumnValueExpressions: [
            {
              ColumnId: 'Side',
              ColumnDisplayValues: ['BUY COVER'],
              ColumnRawValues: ['BUY COVER'],
            },
          ],
          FilterExpressions: [],
          RangeExpressions: [],
        },
      },
      {
        ColumnId: '',
        ColumnCategoryId: '',
        Style: {
          BackColor: '#ffd2d2',
          FontWeight: 'Normal',
          FontStyle: 'Normal',
          ClassName: '',
        },
        ConditionalStyleScope: 'Row',
        Expression: {
          ColumnValueExpressions: [
            {
              ColumnId: 'Side',
              ColumnDisplayValues: ['SELL SHORT'],
              ColumnRawValues: ['SELL SHORT'],
            },
          ],
          FilterExpressions: [],
          RangeExpressions: [],
        },
      },
      {
        ColumnId: 'Order ID',
        ColumnCategoryId: '',
        Style: {
          BackColor: '#ffff80',
          FontWeight: 'Normal',
          FontStyle: 'Normal',
          ClassName: '',
        },
        ConditionalStyleScope: 'Column',
        Expression: {
          ColumnValueExpressions: [],
          FilterExpressions: [
            {
              ColumnId: 'Benchmark',
              Filters: ['Blanks'],
            },
          ],
          RangeExpressions: [],
        },
      },
    ],
  },
  QuickSearch: {
    QuickSearchText: '',
    DisplayAction: 'ShowRowAndHighlightCell',
    Style: {
      BackColor: '#FFFFCC',
      ForeColor: '#000000',
    },
  },
  PercentBar: {
    PercentBars: [
      {
        ColumnId: 'Executed Shares',
        PositiveValue: 100,
        NegativeValue: 0,
        PositiveColor: '#008000',
        NegativeColor: '#FF0000',
        ShowValue: true,
        PositiveValueColumnId: 'Amount',
        NegativeValueColumnId: undefined,
      },
      {
        ColumnId: 'Leaves',
        PositiveValue: 100,
        NegativeValue: 0,
        PositiveColor: '#008000',
        NegativeColor: '#FF0000',
        ShowValue: true,
        PositiveValueColumnId: 'Amount',
        NegativeValueColumnId: undefined,
      },
    ],
  },
  CellValidation: {
    CellValidations: [
      {
        ActionMode: 'Stop Edit',
        ColumnId: 'Archive Flag',
        Range: {
          Operator: 'NotEquals',
          Operand1: 'Y',
          Operand2: '',
          Operand1Type: 'Value',
          Operand2Type: 'Value',
        },
        Expression: {
          ColumnValueExpressions: [],
          FilterExpressions: [],
          RangeExpressions: [],
        },
      },
      {
        ActionMode: 'Stop Edit',
        ColumnId: 'Benchmark',
        Range: {
          Operator: 'ExistingValuesOnly',
          Operand1: '',
          Operand2: '',
          Operand1Type: 'Value',
          Operand2Type: 'Value',
        },
        Expression: {
          ColumnValueExpressions: [],
          FilterExpressions: [],
          RangeExpressions: [],
        },
      },
    ],
  },
  UserFilter: {
    UserFilters: [
      {
        Name: 'Deleted',
        ColumnId: 'Order Status',
        Expression: {
          ColumnValueExpressions: [
            {
              ColumnId: 'Order Status',
              ColumnDisplayValues: ['Deleted'],
              ColumnRawValues: ['Deleted'],
            },
          ],
          FilterExpressions: [],
          RangeExpressions: [],
        },
      },
      {
        Name: 'NotDeleted',
        ColumnId: 'Order Status',
        Expression: {
          ColumnValueExpressions: [],
          FilterExpressions: [],
          RangeExpressions: [
            {
              ColumnId: 'Order Status',
              Ranges: [
                {
                  Operand1Type: 'Value',
                  Operand2Type: 'Value',
                  Operator: 'NotEquals',
                  Operand1: 'Deleted',
                  Operand2: '',
                },
              ],
            },
          ],
        },
      },
      {
        Name: 'NotArchived',
        ColumnId: 'Archive Flag',
        Expression: {
          ColumnValueExpressions: [],
          FilterExpressions: [],
          RangeExpressions: [
            {
              ColumnId: 'Archive Flag',
              Ranges: [
                {
                  Operand1Type: 'Value',
                  Operand2Type: 'Value',
                  Operator: 'NotEquals',
                  Operand1: 'Y',
                  Operand2: '',
                },
              ],
            },
          ],
        },
      },
      {
        Name: 'TraderSB',
        ColumnId: 'Trader ID',
        Expression: {
          ColumnValueExpressions: [
            {
              ColumnId: 'Trader ID',
              ColumnDisplayValues: ['SB'],
              ColumnRawValues: ['SB'],
            },
          ],
          FilterExpressions: [],
          RangeExpressions: [],
        },
      },
      {
        Name: 'MyOrders',
        ColumnId: 'Trader ID',
        Expression: {
          ColumnValueExpressions: [
            {
              ColumnId: 'Trader ID',
              ColumnDisplayValues: ['SB'],
              ColumnRawValues: ['SB'],
            },
          ],
          FilterExpressions: [],
          RangeExpressions: [],
        },
      },
      {
        Name: 'Europe',
        ColumnId: 'Region',
        Expression: {
          ColumnValueExpressions: [
            {
              ColumnId: 'Region',
              ColumnDisplayValues: ['EUROPE', 'BONDS'],
              ColumnRawValues: ['EUROPE', 'BONDS'],
            },
          ],
          FilterExpressions: [],
          RangeExpressions: [],
        },
      },
    ],
  },
  UserInterface: {
    EditLookUpColumns: [
      {
        ColumnId: 'Directed Order',
        LookUpValues: [true, false],
      },
      {
        ColumnId: 'Cross Trade',
        LookUpValues: [true, false],
      },
      {
        ColumnId: 'TCA Exclude from LiquidMetrix',
        LookUpValues: [true, false],
      },
      {
        ColumnId: 'TCA Include Premarket',
        LookUpValues: [true, false],
      },
      {
        ColumnId: 'Side',
      },
      {
        ColumnId: 'Order Type',
      },
      {
        ColumnId: 'Benchmark',
      },
      {
        ColumnId: 'Time In Force',
      },
      {
        ColumnId: 'Done for Day Flag',
      },
    ],
  },
} as PredefinedConfig;
