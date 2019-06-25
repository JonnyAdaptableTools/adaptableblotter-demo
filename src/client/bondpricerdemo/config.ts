import { PredefinedConfig } from 'adaptableblotter/types';

export default {
  Dashboard: {
    VisibleButtons: ['CustomSort'],
  },
  CustomSort: {
    CustomSorts: [
      {
        ColumnId: 'Rating',
        SortedValues: ['AAA', 'AA+', 'AA', 'AA-'],
      },
    ],
  },
} as PredefinedConfig;
