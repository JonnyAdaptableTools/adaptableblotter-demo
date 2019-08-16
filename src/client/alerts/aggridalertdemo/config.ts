import { PredefinedConfig } from '@adaptabletools/adaptableblotter/types';

export default {
  Dashboard: {
    VisibleToolbars: ['Alert'],
  },
  Alert: {
    MaxAlertsInStore: 10,
    AlertDefinitions: [
      {
        ColumnId: 'InvoicedCost',
        MessageType: 'Warning',
        Range: {
          Operand1: '2000',
          Operand1Type: 'Value',
          Operand2: '',
          Operand2Type: 'Value',
          Operator: 'GreaterThan',
        },
        ShowAsPopup: true,
      },
      {
        ColumnId: 'ItemCount',
        MessageType: 'Info',
        Range: {
          Operand1: '100',
          Operand1Type: 'Value',
          Operand2: '',
          Operand2Type: 'Value',
          Operator: 'PercentChange',
        },
        ShowAsPopup: false,
      },
    ],
  },
} as PredefinedConfig;
