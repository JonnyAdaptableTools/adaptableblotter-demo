import { PredefinedConfig } from '@adaptabletools/adaptable/types';

export default {
  UserInterface: {
    PermittedValuesColumns: [
      {
        ColumnId: 'ContactName',
        PermittedValues: [
          'Elizabeth Lincoln',
          'Mario Pontes',
          'Maria Larsson',
          'Roland Mendel',
          'Catherine Dewey',
          'Carlos Hernández',
          'Elizabeth Lincoln',
          'Art Braunschweiger',
          'Daniel Tonini',
          'Carine Schmitt',
          'Martín Sommer',
          'Pedro Afonso',
        ],
      },
      {
        ColumnId: 'Employee',
        PermittedValues: ['Janet Leverling', 'Robert King', 'Summer Intern'],
      },
    ],
  },
} as PredefinedConfig;
