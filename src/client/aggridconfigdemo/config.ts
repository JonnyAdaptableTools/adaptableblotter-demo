// TODO we should expose all of these from adaptableblotter/types
import { IColumnValueExpression } from 'adaptableblotter/Utilities/Interface/Expression/IColumnValueExpression';
import { IRangeExpression } from 'adaptableblotter/Utilities/Interface/Expression/IRangeExpression';
import { IFilterExpression } from 'adaptableblotter/Utilities/Interface/Expression/IFilterExpression';

export default {
  Dashboard: {
    VisibleToolbars: ['SmartEdit', 'Export', 'Layout'],
    VisibleButtons: [
      'Dashboard',
      'QuickSearch',
      'ColumnChooser',
      'AdvancedSearch'
    ],
    Zoom: 0.9,
    UseSingleColourForButtons: true,
    ShowSystemStatusButton: false
  },
  SmartEdit: {
    SmartEditValue: 10
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
          'InvoicedCost'
        ],
        Expression: {
          ColumnValueExpressions: [] as IColumnValueExpression[],
          FilterExpressions: [] as IFilterExpression[],
          RangeExpressions: [
            {
              ColumnId: 'Freight',
              Ranges: [
                {
                  Operand1: '500',
                  Operand1Type: 'Value',
                  Operand2: '',
                  Operand2Type: 'Value',
                  Operator: 'GreaterThan'
                }
              ]
            }
          ]
        }
      }
    ]
  },
  CustomSort: {
    Customsorts: [
      {
        ColumnId: 'Employee',
        SortedValues: ['Margaret Peacock', 'Steven Buchanan', 'Janet Leverling']
      }
    ]
  },
  ConditionalStyle: {
    ConditionalStyles: [
      {
        ColumnId: 'ChangeLastOrder',
        Style: {
          ForeColor: '#008000'
        },
        ConditionalStyleScope: 'Column',
        Expression: {
          ColumnValueExpressions: [] as IColumnValueExpression[],
          FilterExpressions: [
            {
              ColumnId: 'ChangeLastOrder',
              Filters: ['Positive']
            }
          ],
          RangeExpressions: [] as IRangeExpression[]
        }
      },
      {
        ColumnId: 'ChangeLastOrder',
        Style: {
          ForeColor: '#ff0000'
        },
        ConditionalStyleScope: 'Column',
        Expression: {
          ColumnValueExpressions: [] as IColumnValueExpression[],
          FilterExpressions: [
            {
              ColumnId: 'ChangeLastOrder',
              Filters: ['Negative']
            }
          ],
          RangeExpressions: [] as IRangeExpression[]
        }
      },
      {
        Style: {
          BackColor: '#ffffcc',
          FontStyle: 'Italic',
          ForeColor: '#000000'
        },
        ConditionalStyleScope: 'Row',
        Expression: {
          ColumnValueExpressions: [] as IColumnValueExpression[],
          FilterExpressions: [] as IFilterExpression[],
          RangeExpressions: [
            {
              ColumnId: 'InvoicedCost',
              Ranges: [
                {
                  Operand1: '2000',
                  Operand1Type: 'Value',
                  Operand2: '',
                  Operand2Type: 'Value',
                  Operator: 'GreaterThan'
                }
              ]
            }
          ]
        }
      }
    ]
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
          'RequiredDate',
          'InvoicedCost',
          'ChangeLastOrder',
          'OrderCost',
          'PackageCost',
          'ItemCost',
          'ItemCount'
        ],
        GridSorts: [],
        Name: 'Orders View'
      },
      {
        Columns: [
          'OrderId',
          'ShipVia',
          'Freight',
          'ShipName',
          'ShipAddress',
          'ShipCity',
          'ShipCountry',
          'ShippedDate',
          'CustomerReference'
        ],
        GridSorts: [
          {
            Column: 'ShipName',
            SortOrder: 'Ascending'
          }
        ],
        Name: 'Shipping View'
      }
    ]
  }
};
