import { PredefinedConfig } from '@adaptabletools/adaptableblotter/types';

export default {
  Dashboard: {
    VisibleToolbars: ['SmartEdit', 'Export', 'Chart'],
  },
  Chart: {
    CurrentChartName: 'Dollar Change',
    ChartDefinitions: [
      {
        ChartType: 'SparklinesChart',
        Description: 'The Change on Year for Trades where Currency is USD',
        Name: 'Dollar Change',
        VisibleRowsOnly: true,
        ColumnId: 'changeOnYear',
        Expression: {
          ColumnValueExpressions: [
            {
              ColumnDisplayValues: ['USD'],
              ColumnId: 'currency',
              ColumnRawValues: ['USD'],
            },
          ],
          FilterExpressions: [],
          RangeExpressions: [],
        },
        ChartProperties: {
          DisplayType: 'Column',
        },
      },
    ],
  },
} as PredefinedConfig;
