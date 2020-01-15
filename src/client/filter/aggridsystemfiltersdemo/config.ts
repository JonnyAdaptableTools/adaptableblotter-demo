import { PredefinedConfig } from '@adaptabletools/adaptable/types';

export default {
  SystemFilter: {
    SystemFilters: ['Positive', 'Zero'],
  },
  ColumnFilter: {
    ColumnFilters: [
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
    ],
  },
} as PredefinedConfig;
