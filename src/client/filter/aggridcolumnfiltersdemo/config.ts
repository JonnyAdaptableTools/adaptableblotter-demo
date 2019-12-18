import { PredefinedConfig } from '@adaptabletools/adaptableblotter/types';

export default {
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
              ColumnRawValues: [
                'Janet Leverling',
                'Margaret Peacock',
                'Nancy Davolio',
              ],
              ColumnId: 'Employee',
            },
          ],
          FilterExpressions: [],
        },

        ColumnId: 'Employee',
      },
      {
        Filter: {
          FilterExpressions: [
            {
              ColumnId: 'OrderDate',
              Filters: ['This Year'],
            },
          ],
        },
        ColumnId: 'OrderDate',
      },
      {
        Filter: {
          RangeExpressions: [
            {
              ColumnId: 'InvoicedCost',
              Ranges: [
                {
                  Operand1: '10',
                  Operand1Type: 'Value',
                  Operand2: '300',
                  Operand2Type: 'Value',
                  Operator: 'Between',
                },
              ],
            },
          ],
        },
        ColumnId: 'InvoicedCost',
      },
    ],
  },
  Dashboard: {
    VisibleToolbars: ['ColumnFilter'],
  },
} as PredefinedConfig;
