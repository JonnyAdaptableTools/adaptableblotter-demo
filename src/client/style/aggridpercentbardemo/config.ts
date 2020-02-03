import { PredefinedConfig } from '@adaptabletools/adaptable/types';

export default {
  Dashboard: {
    VisibleButtons: ['PercentBar'],
  },

  PercentBar: {
    PercentBars: [
      {
        ColumnId: 'ChangeLastOrder',
        PositiveValue: 56,
        NegativeValue: -41,
        NegativeColor: '#FF0000',
        PositiveColor: '#008000',
        ShowValue: false,
      },
      {
        ColumnId: 'InvoicedCost',
        PositiveValue: 2810.5056,
        NegativeColor: '#FF0000',
        PositiveColor: '#008000',
        ShowValue: false,
      },
      {
        ColumnId: 'ItemCost',
        PositiveValue: 199.46,
        NegativeColor: '#FF0000',
        PositiveColor: '#ffff00',
        ShowValue: true,
      },
    ],
  },
} as PredefinedConfig;
