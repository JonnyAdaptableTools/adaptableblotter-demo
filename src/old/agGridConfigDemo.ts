import * as Helper from '../Helpers/Helper';
import { Grid } from 'ag-grid-community/dist/lib/grid';
import { GridOptions } from 'ag-grid-community/dist/lib/entities/gridOptions';
import * as HelperAgGrid from '../Helpers/HelperAgGrid';
import {
  IAdaptableBlotter,
  AdaptableBlotterOptions,
} from '@adaptabletools/adaptableblotter/types';
import { IColumnValueExpression } from '@adaptabletools/adaptableblotter/dist/App_Scripts/Utilities/Interface/Expression/IColumnValueExpression';
import { IRangeExpression } from '@adaptabletools/adaptableblotter/dist/App_Scripts/Utilities/Interface/Expression/IRangeExpression';
import { IFilterExpression } from '@adaptabletools/adaptableblotter/dist/App_Scripts/Utilities/Interface/Expression/IFilterExpression';

export class agGridConfigDemo {
  private adaptableblotter: IAdaptableBlotter;
  constructor() {
    let data: any[];
    Helper.getDataFromJson('NorthwindOrders.json')
      .then(json => (data = json))
      .then(data => Helper.MakeAllRecordsColumnsDateProperDates(data))
      .then(() => {
        HelperAgGrid.setUpAgGridLicence();
        var columndefs = HelperAgGrid.getBasicNorthwindColumnSchema();
        var gridOptions = HelperAgGrid.getGridOptions(columndefs, data);
        var eGridDiv = document.getElementById('grid');
        let grid = new Grid(eGridDiv, gridOptions);

        let blotterOptions: AdaptableBlotterOptions = HelperAgGrid.getAadaptableBlotterOptions(
          gridOptions,
          'OrderId',
          'Config Demo',
          json
        );
        this.adaptableblotter = new (<any>(
          window
        )).adaptableblotteraggrid.AdaptableBlotter(blotterOptions);
      });
  }
}

let json = {
  Dashboard: {
    VisibleToolbars: ['SmartEdit', 'Export', 'Layout'],
    VisibleButtons: [
      'Dashboard',
      'QuickSearch',
      'ColumnChooser',
      'AdvancedSearch',
    ],
    ShowSystemStatusButton: false,
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
          ColumnValueExpressions: [],
          FilterExpressions: [],
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
    Customsorts: [
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
          ColumnValueExpressions: [],
          FilterExpressions: [
            {
              ColumnId: 'ChangeLastOrder',
              Filters: ['Positive'],
            },
          ],
          RangeExpressions: [],
        },
      },
      {
        ColumnId: 'ChangeLastOrder',
        Style: {
          ForeColor: '#ff0000',
        },
        ConditionalStyleScope: 'Column',
        Expression: {
          ColumnValueExpressions: [],
          FilterExpressions: [
            {
              ColumnId: 'ChangeLastOrder',
              Filters: ['Negative'],
            },
          ],
          RangeExpressions: [],
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
          ColumnValueExpressions: [],
          FilterExpressions: [],
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
};
