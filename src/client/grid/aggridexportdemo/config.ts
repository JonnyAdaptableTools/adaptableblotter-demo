import { PredefinedConfig } from '@adaptabletools/adaptable/types';

export default {
  Dashboard: {
    VisibleToolbars: ['Export'],
  },
  Export: {
    CurrentReport: 'My Team Big Invoice',
    Reports: [
      {
        Expression: {
          ColumnValueExpressions: [
            {
              ColumnId: 'Employee',
              ColumnDisplayValues: [
                'Robert King',
                'Margaret Peacock',
                'Anne Dodsworth',
              ],
            },
          ],
          RangeExpressions: [
            {
              ColumnId: 'InvoicedCost',
              Ranges: [
                {
                  Operator: 'GreaterThan',
                  Operand1: '1000',
                  Operand2: '',
                  Operand1Type: 'Value',
                  Operand2Type: 'Value',
                },
              ],
            },
          ],
        },
        Name: 'My Team Big Invoice',
        ReportColumnScope: 'AllColumns',
        ReportRowScope: 'ExpressionRows',
      },
      {
        AutoExport: {
          ExportDestination: 'CSV',
          Schedule: {
            Hour: 17,
            Minute: 0,
            OneOffDate: null,
            DaysOfWeek: [1, 2, 3, 4, 5, 6, 0],
          },
        },
        ColumnIds: [
          'OrderId',
          'ChangeLastOrder',
          'ContactName',
          'InvoicedCost',
          'ItemCost',
          'ItemCount',
          'OrderCost',
          'OrderDate',
        ],
        Name: 'Current Orders',
        ReportColumnScope: 'BespokeColumns',
        ReportRowScope: 'VisibleRows',
      },
    ],
  },
} as PredefinedConfig;
