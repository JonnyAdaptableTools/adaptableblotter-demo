import { PredefinedConfig } from 'adaptableblotter/types';

export default {
  NamedFilter: {
    NamedFilters: [
      {
        Name: 'High',
        Scope: {
          ColumnIds: ['OrderId'],
        },
        PredicateName: 'High Order',
      },
      {
        Name: 'New Starter',
        Scope: {
          ColumnIds: ['Employee'],
        },
        PredicateName: 'New Starter',
      },

      {
        Name: 'Post Takeover',
        Scope: {
          DataType: 'Date',
        },
        PredicateName: 'Post Takeover',
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
              Filters: ['New Starter'],
            },
          ],
        },
      },
    ],
  },
} as PredefinedConfig;
