export default {
  Dashboard: {
    VisibleToolbars: ['Export'],
  },
  Export: {
    CurrentReport: 'My Team Big Invoice',
    Reports: [
      {
        AutoExport: null,
        ColumnIds: [],
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
          FilterExpressions: [],
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
          'Contact',
          'InvoicedCost',
          'ItemCost',
          'ItemCount',
          'OrderCost',
          'OrderDate',
        ],
        Expression: {
          ColumnValueExpressions: [],
          FilterExpressions: [],
          RangeExpressions: [],
        },
        Name: 'Current Orders',
        ReportColumnScope: 'BespokeColumns',
        ReportRowScope: 'VisibleRows',
      },
    ],
  },
};
