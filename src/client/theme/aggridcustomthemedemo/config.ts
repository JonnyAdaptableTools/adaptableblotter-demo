import { PredefinedConfig } from 'adaptableblotter/types';

export default {
  Dashboard: {
    VisibleToolbars: ['Theme', 'Export', 'Layout'],
    // ShowSystemStatusButton: false,
  },
  Theme: {
    SystemThemes: [],
    UserThemes: [
      {
        Name: 'wimbledon-theme',
        Description: 'Wimbledon',
      },
    ],
    CurrentTheme: 'wimbledon-theme',
  },
  UserInterface: {
    RowStyles: [
      {
        Style: {
          ForeColor: 'white',
          BackColor: '#462376',
          FontStyle: 'Bold',
        },
        RowType: 'Even',
      },
      {
        Style: {
          ForeColor: 'white',
          BackColor: '#0e6537',
          FontStyle: 'Italic',
        },
        RowType: 'Odd',
      },
    ],
  },
  Export: {
    CurrentReport: 'Visible Data',
  },
} as PredefinedConfig;
