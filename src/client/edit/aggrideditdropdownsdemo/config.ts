import { PredefinedConfig } from '@adaptabletools/adaptableblotter/types';

export default {
  UserInterface: {
    PermittedColumnValues: [
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
          'PRINI',
          'GREAL',
          'WILMK',
          'MAISD',
          'THECR',
          'SAVEA',
          'FOLKO',
          'RATTC',
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
