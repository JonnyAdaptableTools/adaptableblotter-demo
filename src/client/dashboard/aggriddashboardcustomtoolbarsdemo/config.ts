import { PredefinedConfig } from '@adaptabletools/adaptable/types';

export default {
  Dashboard: {
    VisibleToolbars: ['Layout', 'Trades'],
    CustomToolbars: [
      {
        Name: 'Trades',
        Title: 'Trades',
        ToolbarButtons: [
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
    ],
  },
} as PredefinedConfig;
