import { PredefinedConfig } from '@adaptabletools/adaptableblotter/types';

export default {
  Dashboard: {
    VisibleButtons: ['ConditionalStyle'],
  },
  ConditionalStyle: {
    ConditionalStyles: [
      {
        ColumnId: 'ChangeLastOrder',
        Style: {
          ForeColor: '#008000',
        },
        ConditionalStyleScope: 'Column',
        Expression: {
          FilterExpressions: [
            {
              ColumnId: 'ChangeLastOrder',
              Filters: ['Positive'],
            },
          ],
        },
      },
      {
        ColumnId: 'ChangeLastOrder',
        Style: {
          ForeColor: '#ff0000',
        },
        ConditionalStyleScope: 'Column',
        Expression: {
          FilterExpressions: [
            {
              ColumnId: 'ChangeLastOrder',
              Filters: ['Negative'],
            },
          ],
        },
      },
      {
        Style: {
          BackColor: '#ffffcc',
          FontStyle: 'Italic',
          ForeColor: '#000000',
        },
        ConditionalStyleScope: 'Row',
        Expression: {
          RangeExpressions: [
            {
              ColumnId: 'ItemCost',
              Ranges: [
                {
                  Operand1: '80',
                  Operand1Type: 'Value',
                  Operand2: '',
                  Operand2Type: 'Value',
                  Operator: 'GreaterThan',
                },
              ],
            },
          ],
        },
      },
    ],
  },
} as PredefinedConfig;
