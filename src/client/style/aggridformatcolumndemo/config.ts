import { PredefinedConfig } from '@adaptabletools/adaptable/types';

export default {
  Dashboard: {
    VisibleButtons: ['FormatColumn'],
  },
  FormatColumn: {
    FormatColumns: [
      {
        ColumnId: 'OrderDate',
        Style: {
          FontWeight: 'Bold',
          FontSize: 'XSmall',
          FontStyle: 'Italic',
          ClassName: '',
        },
      },
      {
        ColumnId: 'OrderId',
        Style: {
          BackColor: '#d4fb79',
          ForeColor: '#8b0000',
          FontWeight: 'Normal',
          FontStyle: 'Normal',
          ClassName: '',
        },
      },
    ],
  },
} as PredefinedConfig;
