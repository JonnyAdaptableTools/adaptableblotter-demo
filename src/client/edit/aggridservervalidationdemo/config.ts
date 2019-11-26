import { PredefinedConfig } from '@adaptabletools/adaptableblotter/types';

export default {
  Dashboard: {
    VisibleButtons: ['CellValidation'],
    VisibleToolbars: ['QuickSearch', 'BulkUpdate', 'SmartEdit', 'Layout'],
  },
  CellValidation: {
    CellValidations: [
      {
        ActionMode: 'Stop Edit',
        ColumnId: 'ItemCount',
        Range: {
          Operand1: '15',
          Operand1Type: 'Value',
          Operand2: '',
          Operand2Type: 'Value',
          Operator: 'ValueChange',
        },
      },
    ],
  },
  Layout: {
    CurrentLayout: 'Server Val View',
    Layouts: [
      {
        Name: 'Server Val View',
        Columns: [
          'OrderId',
          'OrderDate',
          'ItemCost',
          'ItemCount',
          'CustomerReference',
          'CompanyName',
          'ContactName',
          'InvoicedCost',
          'ChangeLastOrder',
          'OrderCost',
          'PackageCost',
        ],
      },
    ],
  },
} as PredefinedConfig;
