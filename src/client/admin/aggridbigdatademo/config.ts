import { PredefinedConfig } from '@adaptabletools/adaptableblotter/types';

export default {
  FlashingCell: {
    FlashingCells: [
      {
        ColumnId: 'bid',
        DownColor: '#FF0000',
        FlashingCellDuration: 250,
        IsLive: true,
        UpColor: '#008000',
      },
      {
        ColumnId: 'ask',
        DownColor: '#FF0000',
        FlashingCellDuration: 250,
        IsLive: true,
        UpColor: '#008000',
      },
      {
        ColumnId: 'price',
        DownColor: '#FF0000',
        FlashingCellDuration: 250,
        IsLive: true,
        UpColor: '#008000',
      },
    ],
  },
} as PredefinedConfig;
