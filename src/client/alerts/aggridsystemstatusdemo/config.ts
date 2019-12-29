import { PredefinedConfig } from '@adaptabletools/adaptableblotter/types';

export default {
  Dashboard: {
    VisibleToolbars: ['SystemStatus', 'DemoButtons'],
    CustomToolbars: [
      {
        Name: 'DemoButtons',
        Title: 'Demo Buttons',
        Glyph: 'advanced-search',
        ToolbarButtons: [
          {
            Name: 'info',
            Caption: 'Info',
            ButtonStyle: {
              Variant: 'text',
              Tone: 'info',
            },
          },
          {
            Name: 'success',
            Caption: 'Success',
            ButtonStyle: {
              Variant: 'text',
              Tone: 'success',
            },
          },
          {
            Name: 'warning',
            Caption: 'Warning',
            ButtonStyle: {
              Variant: 'text',
              Tone: 'warning',
            },
          },
          {
            Name: 'error',
            Caption: 'Error',
            ButtonStyle: {
              Variant: 'text',
              Tone: 'error',
            },
          },
          {
            Name: 'clear',
            Caption: 'Clear',
            //   Variant: 'raised',
          },
        ],
      },
    ],
  },
  SystemStatus: {
    ShowAlert: false,
    DefaultStatusMessage: 'Everything is fine',
    DefaultStatusType: 'Success',
    StatusMessage: 'Server running slowly',
    StatusType: 'Warning',
  },
} as PredefinedConfig;
