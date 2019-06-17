import { PredefinedConfig } from 'adaptableblotter/types';

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
              ColumnId: 'Employee',
              ColumnRawValues: [],
            },
          ],
          FilterExpressions: [],
          RangeExpressions: [],
        },
        ColumnId: 'Employee',
      },
      {
        Filter: {
          ColumnValueExpressions: [],
          FilterExpressions: [
            {
              ColumnId: 'OrderDate',
              Filters: ['This Year'],
            },
          ],
          RangeExpressions: [],
        },
        ColumnId: 'OrderDate',
      },
      {
        Filter: {
          ColumnValueExpressions: [],
          FilterExpressions: [],
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
