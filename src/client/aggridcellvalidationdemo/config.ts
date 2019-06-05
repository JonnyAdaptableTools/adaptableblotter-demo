export default {
  Dashboard: {
    VisibleButtons: ['CellValidation'],
  },
  CellValidation: {
    CellValidations: [
      {
        ActionMode: 'Stop Edit',
        ColumnId: 'CustomerReference',
        Expression: {
          ColumnValueExpressions: [],
          FilterExpressions: [],
          RangeExpressions: [],
        },
        Range: {
          Operator: 'None',
          Operand1: '',
          Operand2: '',
          Operand1Type: 'Value',
          Operand2Type: 'Value',
        },
      },
      {
        ActionMode: 'Show Warning',
        ColumnId: 'Employee',
        Expression: {
          ColumnValueExpressions: [],
          FilterExpressions: [],
          RangeExpressions: [],
        },
        Range: {
          Operator: 'None',
          Operand1: '',
          Operand2: '',
          Operand1Type: 'Value',
          Operand2Type: 'Value',
        },
      },
      {
        ActionMode: 'Stop Edit',
        ColumnId: 'InvoicedCost',
        Expression: {
          ColumnValueExpressions: [],
          FilterExpressions: [],
          RangeExpressions: [],
        },
        Range: {
          Operator: 'GreaterThan',
          Operand1: 3000,
          Operand2: '',
          Operand1Type: 'Value',
          Operand2Type: 'Value',
        },
      },
      {
        ActionMode: 'Show Warning',
        ColumnId: 'OrderCost',
        Expression: {
          ColumnValueExpressions: [],
          FilterExpressions: [],
          RangeExpressions: [],
        },
        Range: {
          Operator: 'PercentChange',
          Operand1: 100,
          Operand2: '',
          Operand1Type: 'Value',
          Operand2Type: 'Value',
        },
      },
    ],
  },
};
