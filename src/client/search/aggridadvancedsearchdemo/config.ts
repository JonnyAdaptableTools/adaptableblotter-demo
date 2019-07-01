import { PredefinedConfig } from 'adaptableblotter/types';

export default {
  AdvancedSearch: {
    AdvancedSearches: [
      {
        Expression: {
          ColumnValueExpressions: [
            {
              ColumnDisplayValues: [
                'Janet Leverling',
                'Margaret Peacock',
                'Robert King',
              ],
              ColumnId: 'Employee',
            },
          ],
          FilterExpressions: [
            {
              ColumnId: 'OrderDate',
              Filters: ['This Year'],
            },
          ],
          RangeExpressions: [
            {
              ColumnId: 'InvoicedCost',
              Ranges: [
                {
                  Operand1: '300',
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
