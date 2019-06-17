import { PredefinedConfig } from 'adaptableblotter/types';

export default {
  Theme: {
    CurrentTheme: 'Dark Theme',
  },
  Dashboard: {
    VisibleToolbars: ['AdvancedSearch', 'QuickSearch', 'Theme'],
    VisibleButtons: ['FlashingCells'],
    DashboardVisibility: 'Minimised',
  },
  FlashingCell: {
    FlashingCells: [
      {
        ColumnId: 'ChangeLastOrder',
        DownColor: '#FF0000',
        FlashingCellDuration: 500,
        IsLive: true,
        UpColor: '#008000',
      },
      {
        ColumnId: 'ItemCost',
        DownColor: '#FF0000',
        FlashingCellDuration: 500,
        IsLive: true,
        UpColor: '#008000',
      },
      {
        ColumnId: 'OrderCost',
        DownColor: '#FF0000',
        FlashingCellDuration: 500,
        IsLive: true,
        UpColor: '#008000',
      },
      {
        ColumnId: 'InvoicedCost',
        DownColor: '#ff6961',
        FlashingCellDuration: 750,
        IsLive: true,
        UpColor: '#0000ff',
      },
    ],
  },
} as PredefinedConfig;
