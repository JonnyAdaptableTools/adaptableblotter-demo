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
            },
          ],
        },
      },
      {
        Name: 'Small Invoices',
        ColumnId: 'InvoicedCost',
        Expression: {
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
          FilterExpressions: [
            {
              ColumnId: 'Employee',
              Filters: ['My Team'],
            },
          ],
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
          FilterExpressions: [
            {
              ColumnId: 'InvoicedCost',
              Filters: ['Small Invoices'],
            },
          ],
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
        Expression: {
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
