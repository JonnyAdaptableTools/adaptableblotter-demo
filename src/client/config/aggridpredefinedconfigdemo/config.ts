import { PredefinedConfig } from '@adaptabletools/adaptableblotter/types';

export default {
  Dashboard: {
    VisibleToolbars: ['SmartEdit', 'Export', 'Layout', 'QuickSearch'],
    VisibleButtons: ['Dashboard', 'ColumnChooser', 'AdvancedSearch'],
  },
  SmartEdit: {
    SmartEditValue: 10,
  },
  Export: {
    CurrentReport: 'High Freight',
    Reports: [
      {
        Name: 'High Freight',
        ReportColumnScope: 'BespokeColumns',
        ReportRowScope: 'ExpressionRows',
        ColumnIds: [
          'OrderId',
          'Freight',
          'Employee',
          'PackageCost',
          'InvoicedCost',
        ],
        Expression: {
          RangeExpressions: [
            {
              ColumnId: 'Freight',
              Ranges: [
                {
                  Operand1: '500',
                  Operand1Type: 'Value',
                  Operand2: '',
                  Operand2Type: 'Value',
                  Operator: 'GreaterThan',
                },
              ],
            },
          ],
        },
      },
    ],
  },
  CustomSort: {
    CustomSorts: [
      {
        ColumnId: 'Employee',
        SortedValues: [
          'Margaret Peacock',
          'Steven Buchanan',
          'Janet Leverling',
        ],
      },
    ],
  },
  ConditionalStyle: {
    ConditionalStyles: [
      {
        ColumnId: 'ChangeLastOrder',
        Style: {
          ForeColor: '#008000',
        },
        ConditionalStyleScope: 'Column',
        Expression: {
          FilterExpressions: [
            {
              ColumnId: 'ChangeLastOrder',
              Filters: ['Positive'],
            },
          ],
        },
      },
      {
        ColumnId: 'ChangeLastOrder',
        Style: {
          ForeColor: '#ff0000',
        },
        ConditionalStyleScope: 'Column',
        Expression: {
          FilterExpressions: [
            {
              ColumnId: 'ChangeLastOrder',
              Filters: ['Negative'],
            },
          ],
        },
      },
      {
        Style: {
          BackColor: '#ffffcc',
          FontStyle: 'Italic',
          ForeColor: '#000000',
        },
        ConditionalStyleScope: 'Row',
        Expression: {
          RangeExpressions: [
            {
              ColumnId: 'InvoicedCost',
              Ranges: [
                {
                  Operand1: '2000',
                  Operand1Type: 'Value',
                  Operand2: '',
                  Operand2Type: 'Value',
                  Operator: 'GreaterThan',
                },
              ],
            },
          ],
        },
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
          'Employee',
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
        ColumnSorts: [
          {
            Column: 'ShipName',
            SortOrder: 'Ascending',
          },
        ],
        Name: 'Shipping View',
      },
    ],
  },
  FormatColumn: {
    FormatColumns: [
      {
        ColumnId: 'OrderId',
        Style: {
          BackColor: '#d4fb79',
          ForeColor: '#8b0000',
          FontWeight: 'Normal',
          FontStyle: 'Normal',
          ClassName: '',
        },
      },
    ],
  },
  QuickSearch: {
    QuickSearchText: 'g*',
    DisplayAction: 'ShowRowAndHighlightCell',
    Style: {
      BackColor: '#ffff00',
      ForeColor: '#8b0000',
    },
  },
} as PredefinedConfig;
