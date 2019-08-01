import { PredefinedConfig } from 'adaptableblotter/types';

export default {
  SmartEdit: {
    SmartEditValue: 100,
    MathOperation: 'Add',
  },
  FlashingCell: {
    FlashingCells: [
      {
        ColumnId: 'InvoicedCost',
        DownColor: '#FF0000',
        FlashingCellDuration: 500,
        IsLive: true,
        UpColor: '#008000',
      },
    ],
  },
  Dashboard: {
    VisibleToolbars: ['SmartEdit'],
  },
} as PredefinedConfig;
