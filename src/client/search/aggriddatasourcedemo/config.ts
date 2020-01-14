import { PredefinedConfig } from '@adaptabletools/adaptable/types';

export default {
  DataSource: {
    DataSources: [
      {
        Name: 'Euro Trades',
        Description: 'Euro Trades',
      },
      {
        Name: 'Dollar Trades',
        Description: 'Dollar Trades',
      },
      {
        Name: 'GBP Trades',
        Description: 'Sterling Trades',
      },
      {
        Name: '2019 Actiivty',
        Description: 'Trades Done This Year',
      },
    ],
  },
  Dashboard: {
    VisibleToolbars: ['DataSource'],
  },
} as PredefinedConfig;
