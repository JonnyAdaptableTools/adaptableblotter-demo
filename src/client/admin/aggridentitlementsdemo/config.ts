import { PredefinedConfig } from '@adaptabletools/adaptableblotter/types';

export default {
  Dashboard: {
    VisibleToolbars: ['Export', 'Layout'],
  },
  Entitlement: {
    FunctionEntitlements: [
      {
        FunctionName: 'ColumnCategory',
        AccessLevel: 'Hidden',
      },
      {
        FunctionName: 'AdvancedSearch',
        AccessLevel: 'Hidden',
      },
      {
        FunctionName: 'Layout',
        AccessLevel: 'ReadOnly',
      },
    ],
  },
  Layout: {
    CurrentLayout: 'Orders View',
    Layouts: [
      {
        Columns: [
          'OrderId',
          'OrderDate',
          'CustomerReference',
          'CompanyName',
          'ContactName',
          'InvoicedCost',
          'ChangeLastOrder',
          'OrderCost',
          'PackageCost',
          'ItemCost',
          'ItemCount',
        ],
        ColumnSorts: [],
        Name: 'Orders View',
      },
      {
        Columns: [
          'OrderId',
          'ShipVia',
          'Freight',
          'ShipName',
          'ShipCountry',
          'ShippedDate',
          'CustomerReference',
        ],
        ColumnSorts: [],
        Name: 'Shipping View',
      },
    ],
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
    ],
  },
} as PredefinedConfig;
