import { PredefinedConfig } from '@adaptabletools/adaptable/types';

export default {
  Dashboard: {
    VisibleToolbars: ['Theme', 'Export', 'Layout'],
  },

  Theme: {
    UserThemes: [
      {
        Name: 'wimbledon-theme',
        Description: 'Wimbledon',
      },
      {
        Name: 'BlueTheme',
        Description: 'Blue theme',
        VendorGridClassName: 'ag-theme-blue',
      },
    ],
    CurrentTheme: 'wimbledon-theme',
  },
} as PredefinedConfig;
