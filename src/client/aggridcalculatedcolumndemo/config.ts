export default {
  Dashboard: {
    VisibleButtons: ['ColumnChooser', 'CalculatedColumn'],
  },
  CalculatedColumn: {
    CalculatedColumns: [
      {
        ColumnExpression: 'Col("ItemCost") / Col("ItemCount")',
        ColumnId: 'Avg Item Cost',
      },
      {
        ColumnExpression:
          'Col("InvoicedCost") - ( Col("OrderCost") + Col("PackageCost"))',
        ColumnId: 'Profit',
      },
    ],
  },
  ConditionalStyle: {
    ConditionalStyles: [
      {
        ColumnId: 'Profit',
        Style: {
          ForeColor: '#008000',
        },
        ConditionalStyleScope: 'Column',
        Expression: {
          ColumnValueExpressions: [],
          FilterExpressions: [
            {
              ColumnId: 'Profit',
              Filters: ['Positive'],
            },
          ],
          RangeExpressions: [],
        },
      },
      {
        ColumnId: 'Profit',
        Style: {
          ForeColor: '#ff0000',
        },
        ConditionalStyleScope: 'Column',
        Expression: {
          ColumnValueExpressions: [],
          FilterExpressions: [
            {
              ColumnId: 'Profit',
              Filters: ['Negative'],
            },
          ],
          RangeExpressions: [],
        },
      },
    ],
  },
  Layout: {
    CurrentLayout: 'with calc cols',
    Layouts: [
      {
        Columns: [
          'OrderId',
          'ItemCost',
          'ItemCount',
          'Avg Item Cost',
          'OrderCost',
          'PackageCost',
          'Profit',
          'OrderDate',
        ],
        ColumnSorts: [],
        Name: 'with calc cols',
      },
    ],
  },
};
