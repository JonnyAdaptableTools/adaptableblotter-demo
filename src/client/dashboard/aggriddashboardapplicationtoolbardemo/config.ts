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
        ButtonStyle: {
          Variant: 'text',
          Tone: 'success',
        },
      },
      {
        Name: 'btnRefreshGrid',
        Caption: 'Refresh Grid',
        ButtonStyle: {
          Variant: 'raised',
          Tone: 'accent',
        },
      },
    ],
  },
} as PredefinedConfig;
