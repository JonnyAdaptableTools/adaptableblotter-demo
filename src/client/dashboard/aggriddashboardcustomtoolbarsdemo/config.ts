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
            Name: 'ToolbarButton1',
            Caption: '1st Button',
            ButtonStyle: {
              Variant: 'text',
              Tone: 'success',
            },
          },
          {
            Name: 'ToolbarButton2',
            Caption: '2nd Button',
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
