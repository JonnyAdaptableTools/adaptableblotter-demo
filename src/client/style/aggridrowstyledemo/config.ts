import { PredefinedConfig } from 'adaptableblotter/types';

export default {
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
          //  ForeColor: 'yellow',
          //  BackColor: 'orange',
          //  FontWeight: 'Bold',
          ClassName: 'evenRowStyle',
        },
        RowType: 'Even',
      },
      {
        Style: {
          ForeColor: 'lightyellow',
          BackColor: 'brown',
          FontStyle: 'Italic',
          //  ClassName: 'oddRowStyle',
        },
        RowType: 'Odd',
      },
    ],
  },
} as PredefinedConfig;
