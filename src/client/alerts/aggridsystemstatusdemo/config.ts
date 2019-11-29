import { PredefinedConfig } from '@adaptabletools/adaptableblotter/types';

export default {
  Dashboard: {
    VisibleToolbars: ['Application', 'Layout'],
  },
  Application: {
    ApplicationToolbarButtons: [
      {
        Name: 'setInfo',
        Caption: 'Set Info',
      },
      {
        Name: 'setWarning',
        Caption: 'Set Warning',
      },
      {
        Name: 'setError',
        Caption: 'Set Error',
      },
      {
        Name: 'setSuccess',
        Caption: 'Set Success',
      },
    ],
  },
} as PredefinedConfig;
