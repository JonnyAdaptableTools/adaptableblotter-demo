import { PredefinedConfig } from 'adaptableblotter/types';

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
        DataSourceParams: [
          {
            Name: 'Hello',
            DataType: 'String',
          },
          {
            Name: 'Age',
            DataType: 'Number',
          },
        ],
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
