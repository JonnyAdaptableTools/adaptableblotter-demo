import { PredefinedConfig } from '@adaptabletools/adaptable/types';

export default {
  Dashboard: {
    ModuleButtons: ['CustomSort'],
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
