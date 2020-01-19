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
        ],
      },
    ],
    EditLookUpColumns: [
      {
        ColumnId: 'CustomerReference',
        LookUpValues: [
          'SANTG',
          'LINOD',
          'ROMEY',
          'FRANK',
          'ALFKI',
          'REGGC',
          'GODOS',
        ],
      },
      {
        ColumnId: 'ContactName',
      },
      {
        ColumnId: 'Employee',
      },
    ],
  },
} as PredefinedConfig;
