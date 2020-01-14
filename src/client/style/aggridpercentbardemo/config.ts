import { PredefinedConfig } from '@adaptabletools/adaptable/types';

export default {
  Dashboard: {
    VisibleButtons: ['PercentBar'],
  },
  PercentBar: {
    PercentBars: [
      {
        ColumnId: 'ChangeLastOrder',
        MaxValue: 56,
        MinValue: -41,
        NegativeColor: '#FF0000',
        PositiveColor: '#008000',
        ShowValue: false,
      },
      {
        ColumnId: 'InvoicedCost',
        MaxValue: 2810.5056,
        MinValue: 0,
        NegativeColor: '#FF0000',
        PositiveColor: '#008000',
        ShowValue: false,
      },
      {
        ColumnId: 'ItemCost',
        MaxValue: 199.46,
        MinValue: 0,
        NegativeColor: '#FF0000',
        PositiveColor: '#ffff00',
        ShowValue: true,
      },
    ],
  },
} as PredefinedConfig;
