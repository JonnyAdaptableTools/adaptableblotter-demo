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
      },
      {
        Name: 'success',
        Caption: 'Success',
        Variant: 'text',
      },
      {
        Name: 'warning',
        Caption: 'Warning',
        Variant: 'text',
      },
      {
        Name: 'error',
        Caption: 'Error',
        Variant: 'text',
      },
      {
        Name: 'clear',
        Caption: 'Clear',
        Variant: 'raised',
      },
    ],
  },
} as PredefinedConfig;
