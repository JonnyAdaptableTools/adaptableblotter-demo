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
    ReportSchedules: [
      {
        ScheduleType: 'Report',
        ReportName: 'Current Orders',
        ExportDestination: 'CSV',
        Schedule: {
          DaysOfWeek: [1, 2, 3, 4, 5],
          Hour: 17,
          Minute: 30,
        },
      },
    ],
  },
} as PredefinedConfig;
