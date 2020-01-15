import { PredefinedConfig } from '@adaptabletools/adaptable/types';

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
              ColumnId: 'ChangeLastOrder',
              Filters: ['Positive'],
            },
          ],
        },
        ColumnId: 'ChangeLastOrder',
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
