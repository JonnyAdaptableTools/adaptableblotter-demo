import { PredefinedConfig } from '@adaptabletools/adaptableblotter/types';

export default {
  Dashboard: {
    VisibleToolbars: ['Application', 'SystemStatus'],
  },
  SystemStatus: {
    ShowAlert: false,
    DefaultStatusMessage: 'Everything is fine',
    DefaultStatusType: 'Success',
    StatusMessage: 'Server running slowly',
    StatusType: 'Warning',
  },
  Application: {
    ApplicationToolbarButtons: [
      {
        Name: 'info',
        Caption: 'Info',
        Variant: 'text',
        //   Tone: 'info',
      },
      {
        Name: 'success',
        Caption: 'Success',
        Variant: 'text',
        //   Tone: 'success',
      },
      {
        Name: 'warning',
        Caption: 'Warning',
        Variant: 'text',
        //   Tone: 'warning',
      },
      {
        Name: 'error',
        Caption: 'Error',
        Variant: 'text',
        //   Tone: 'error',
      },
      {
        Name: 'clear',
        Caption: 'Clear',
        //   Variant: 'raised',
      },
    ],
  },
} as PredefinedConfig;
