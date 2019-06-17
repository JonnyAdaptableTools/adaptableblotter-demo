import { PredefinedConfig } from 'adaptableblotter/types';

export default {
  AdvancedSearch: {
    AdvancedSearches: [
      {
        Expression: {
          ColumnValueExpressions: [
            {
              ColumnDisplayValues: ['Janet Leverling', 'Margaret Peacock'],
              ColumnId: 'Employee',
              ColumnRawValues: ['Janet Leverling', 'Margaret Peacock'],
            },
          ],
          FilterExpressions: [],
          RangeExpressions: [],
        },
        Name: 'Top Employees',
      },
    ],
    CurrentAdvancedSearch: 'Top Employees',
  },
} as PredefinedConfig;
