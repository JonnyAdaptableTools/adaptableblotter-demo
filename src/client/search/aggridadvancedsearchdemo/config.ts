import { PredefinedConfig } from '@adaptabletools/adaptable/types';

export default {
  AdvancedSearch: {
    AdvancedSearches: [
      {
        Expression: {
          ColumnValueExpressions: [
            {
              ColumnDisplayValues: ['Margaret Peacock', 'Robert King'],
              ColumnId: 'Employee',
            },
          ],

          FilterExpressions: [
            {
              ColumnId: 'ChangeLastOrder',
              Filters: ['Positive'],
            },
          ],

          RangeExpressions: [
            {
              ColumnId: 'InvoicedCost',
              Ranges: [
                {
                  Operand1: '1200',
                  Operand1Type: 'Value',
                  Operand2: '',
                  Operand2Type: 'Value',
                  Operator: 'GreaterThan',
                },
              ],
            },
          ],
        },
        Name: 'Team Best Orders',
      },
    ],
    CurrentAdvancedSearch: 'Team Best Orders',
  },
  Dashboard: {
    VisibleToolbars: ['AdvancedSearch'],
  },
} as PredefinedConfig;
