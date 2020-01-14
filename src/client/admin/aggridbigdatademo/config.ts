import { PredefinedConfig } from '@adaptabletools/adaptable/types';

export default {
  FlashingCell: {
    FlashingCells: [
      {
        ColumnId: 'bid',
        DownColor: '#FF0000',
        FlashingCellDuration: 500,
        IsLive: true,
        UpColor: '#008000',
      },
      {
        ColumnId: 'ask',
        DownColor: '#FF0000',
        FlashingCellDuration: 500,
        IsLive: true,
        UpColor: '#008000',
      },
      {
        ColumnId: 'price',
        DownColor: '#FF0000',
        FlashingCellDuration: 500,
        IsLive: true,
        UpColor: '#008000',
      },
    ],
  },
  PercentBar: {
    PercentBars: [
      {
        ColumnId: 'changeOnYear',
        MaxValue: 150,
        MinValue: -150,
        PositiveColor: '#006400',
        NegativeColor: '#a52a2a',
        ShowValue: false,
        ShowToolTip: false,
      },
    ],
  },
} as PredefinedConfig;
