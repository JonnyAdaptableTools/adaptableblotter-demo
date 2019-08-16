import { PredefinedConfig } from '@adaptabletools/adaptableblotter/types';

export default {
  Dashboard: {
    VisibleButtons: ['CustomSort'],
  },
  CustomSort: {
    CustomSorts: [
      {
        ColumnId: 'Employee',
        SortedValues: ['Margaret Peacock', 'Janet Leverling', 'Nancy Davolio'],
      },
      {
        ColumnId: 'ContactName',
        SortedValues: [
          'Palle Ibsen',
          'Jaime Yorres',
          'Aria Cruz',
          'Fran Wilson',
        ],
      },
    ],
  },
} as PredefinedConfig;
