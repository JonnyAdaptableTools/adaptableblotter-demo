import { PredefinedConfig } from 'adaptableblotter/types';

export default {
  Dashboard: {
    VisibleButtons: ['PercentBar'],
  },
  UserInterface: {
    RowStyles: [
      /*
      {
        Style: {
          ForeColor: 'yellow',
          BackColor: 'purple',
          FontWeight: 'Bold',
          // ClassName: 'allRowStyle',
        },
        RowType: 'All',
      },
      */
      {
        Style: {
          //     ForeColor: 'yellow',
          //    BackColor: 'orange',
          FontWeight: 'Bold',
          ClassName: 'evenRowStyle',
        },
        RowType: 'Even',
      },
      {
        Style: {
          ForeColor: 'cyan',
          BackColor: 'brown',
          FontStyle: 'Italic',
          ClassName: 'oddRowStyle',
        },
        RowType: 'Odd',
      },
    ],
  },
} as PredefinedConfig;
