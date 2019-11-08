import { PredefinedConfig } from '@adaptabletools/adaptableblotter/types';

export default {
  Dashboard: {
    VisibleToolbars: ['Application', 'Layout'],
  },
  Application: {
    ApplicationToolbarButtons: [
      {
        Name: 'btnNewTrade',
        Caption: 'New Trade',
      },
      {
        Name: 'btnRefreshGrid',
        Caption: 'Refresh Grid',
      },
    ],
  },
} as PredefinedConfig;
