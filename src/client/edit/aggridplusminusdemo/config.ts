import { PredefinedConfig } from '@adaptabletools/adaptableblotter/types';

export default {
  PlusMinus: {
    PlusMinusRules: [
      {
        ColumnId: 'ItemCost',
        IsDefaultNudge: true,
        NudgeValue: 10,
      },
      {
        ColumnId: 'ItemCost',
        Expression: {
          ColumnValueExpressions: [
            {
              ColumnDisplayValues: ['Janet Leverling'],
              ColumnId: 'Employee',
              ColumnRawValues: [],
            },
          ],
        },
        IsDefaultNudge: false,
        NudgeValue: 20,
      },
    ],
  },
  FlashingCell: {
    FlashingCells: [
      {
        ColumnId: 'ItemCost',
        DownColor: '#FF0000',
        FlashingCellDuration: 500,
        IsLive: true,
        UpColor: '#008000',
      },
    ],
  },
  Dashboard: {
    VisibleButtons: ['PlusMinus'],
  },
} as PredefinedConfig;
