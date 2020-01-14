import { PredefinedConfig } from '@adaptabletools/adaptable/types';

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
      {
        ColumnExpression:
          'Col("ItemCost") > 100 ? "High" : Col("ItemCost") > 50 ? "Medium": "Low"',
        ColumnId: 'Comment',
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
          FilterExpressions: [
            {
              ColumnId: 'Profit',
              Filters: ['Positive'],
            },
          ],
        },
      },
      {
        ColumnId: 'Profit',
        Style: {
          ForeColor: '#ff0000',
        },
        ConditionalStyleScope: 'Column',
        Expression: {
          FilterExpressions: [
            {
              ColumnId: 'Profit',
              Filters: ['Negative'],
            },
          ],
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
          'Comment',
          'ItemCost',
          'ItemCount',
          'Avg Item Cost',
          'OrderCost',
          'PackageCost',
          'Profit',
          'OrderDate',
        ],
        ColumnSorts: [],
        GroupedColumns: ['Comment'],
        Name: 'with calc cols',
      },
    ],
  },
} as PredefinedConfig;
