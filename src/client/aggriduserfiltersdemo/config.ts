import { PredefinedConfig } from 'adaptableblotter/types';

export default {
  UserFilter: {
    UserFilters: [
      {
        Name: 'My Team',
        ColumnId: 'Employee',
        Expression: {
          ColumnValueExpressions: [
            {
              ColumnDisplayValues: [
                'Janet Leverling',
                'Michael Suyama',
                'Robert King',
              ],
              ColumnId: 'Employee',
              ColumnRawValues: [],
            },
          ],
          FilterExpressions: [],
          RangeExpressions: [],
        },
      },
      {
        Name: 'Small Invoices',
        ColumnId: 'InvoicedCost',
        Expression: {
          ColumnValueExpressions: [],
          FilterExpressions: [],
          RangeExpressions: [
            {
              ColumnId: 'InvoicedCost',
              Ranges: [
                {
                  Operand1: '300',
                  Operand1Type: 'Value',
                  Operand2: '',
                  Operand2Type: 'Value',
                  Operator: 'LessThan',
                },
              ],
            },
          ],
        },
      },
    ],
  },
  ColumnFilter: {
    ColumnFilters: [
      {
        ColumnId: 'Employee',
        Filter: {
          ColumnValueExpressions: [],
          FilterExpressions: [
            {
              ColumnId: 'Employee',
              Filters: ['My Team'],
            },
          ],
          RangeExpressions: [],
        },
      },
    ],
  },
  ConditionalStyle: {
    ConditionalStyles: [
      {
        ColumnCategoryId: '',
        ColumnId: '',
        ConditionalStyleScope: 'Row',
        Expression: {
          ColumnValueExpressions: [],
          FilterExpressions: [
            {
              ColumnId: 'InvoicedCost',
              Filters: ['Small Invoices'],
            },
          ],
          RangeExpressions: [],
        },
        Style: {
          BackColor: '#ffffcc',
          ClassName: '',
          FontStyle: 'Italic',
          FontWeight: 'Normal',
          ForeColor: '#800080',
        },
      },
    ],
  },
  Export: {
    CurrentReport: 'Team Small Invoices',
    Reports: [
      {
        ColumnIds: [],
        Expression: {
          ColumnValueExpressions: [],
          FilterExpressions: [
            {
              ColumnId: 'InvoicedCost',
              Filters: ['Small Invoices'],
            },
            {
              ColumnId: 'Employee',
              Filters: ['My Team'],
            },
          ],
          RangeExpressions: [],
        },
        Name: 'Team Small Invoices',
        ReportColumnScope: 'AllColumns',
        ReportRowScope: 'ExpressionRows',
      },
    ],
  },
  Dashboard: {
    VisibleToolbars: ['ColumnFilter', 'Export'],
  },
} as PredefinedConfig;
