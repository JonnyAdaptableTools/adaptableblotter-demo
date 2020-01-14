import { PredefinedConfig } from '@adaptabletools/adaptable/types';

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
        AlertProperties: {
          ShowPopup: true,
        },
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
        AlertProperties: {
          ShowPopup: false,
        },
      },
    ],
  },
} as PredefinedConfig;
