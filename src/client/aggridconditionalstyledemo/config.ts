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
          ColumnValueExpressions: [],
          FilterExpressions: [
            {
              ColumnId: 'ChangeLastOrder',
              Filters: ['Positive'],
            },
          ],
          RangeExpressions: [],
        },
      },
      {
        ColumnId: 'ChangeLastOrder',
        Style: {
          ForeColor: '#ff0000',
        },
        ConditionalStyleScope: 'Column',
        Expression: {
          ColumnValueExpressions: [],
          FilterExpressions: [
            {
              ColumnId: 'ChangeLastOrder',
              Filters: ['Negative'],
            },
          ],
          RangeExpressions: [],
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
          ColumnValueExpressions: [],
          FilterExpressions: [],
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
};
