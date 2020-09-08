import '@adaptabletools/adaptable/index.css';
import '@adaptabletools/adaptable/themes/dark.css';
import '@ag-grid-community/all-modules/dist/styles/ag-grid.css';
import '@ag-grid-community/all-modules/dist/styles/ag-theme-balham.css';
import '@ag-grid-community/all-modules/dist/styles/ag-theme-balham-dark.css';
import Adaptable from '@adaptabletools/adaptable/agGrid';
import { GridOptions } from '@ag-grid-community/all-modules';
import {
  AdaptableOptions,
  PredefinedConfig,
  AdaptableApi,
} from '@adaptabletools/adaptable/types';
import { AllEnterpriseModules } from '@ag-grid-enterprise/all-modules';

var adaptableApi: AdaptableApi;

const demoConfig: PredefinedConfig = {
  /*
  UserFilter: {
    UserFilters: [
      {
        Name: 'My Team',
        ColumnId: 'Employee',
        Expression: {
          ColumnValueExpressions: [
            {
              ColumnDisplayValues: [
                'Janet Leverling',
                'Michael Suyama',
                'Robert King',
              ],
              ColumnId: 'Employee',
            },
          ],
        },
      },
      {
        Name: 'Small Invoices',
        ColumnId: 'InvoicedCost',
        Expression: {
          RangeExpressions: [
            {
              ColumnId: 'InvoicedCost',
              Ranges: [
                {
                  Operand1: '300',
                  Operand1Type: 'Value',
                  Operator: 'LessThan',
                },
              ],
            },
          ],
        },
      },
    ],
  },
Filter: {
    ColumnFilters: [
      {
        ColumnId: 'Employee',
        Filter: {
          FilterExpressions: [
            {
              ColumnId: 'Employee',
              Filters: ['My Team'],
            },
          ],
        },
      },
    ],
  },
  ConditionalStyle: {
    ConditionalStyles: [
      {
        ColumnId: '',
        ConditionalStyleScope: 'Row',
        Expression: {
          FilterExpressions: [
            {
              ColumnId: 'InvoicedCost',
              Filters: ['Small Invoices'],
            },
          ],
        },
        Style: {
          BackColor: '#ffffcc',
          FontStyle: 'Italic',
          FontWeight: 'Normal',
          ForeColor: '#800080',
        },
      },
    ],
  },
  Export: {
    CurrentReport: 'Team Invoices',
    Reports: [
      {
        Expression: {
          FilterExpressions: [
            {
              ColumnId: 'InvoicedCost',
              Filters: ['Small Invoices'],
            },
            {
              ColumnId: 'Employee',
              Filters: ['My Team'],
            },
          ],
        },
        Name: 'Team Invoices',
        ReportColumnScope: 'AllColumns',
        ReportRowScope: 'ExpressionRows',
      },
    ],
  },
  Dashboard: {
    Tabs: [
      {
        Name: 'Toolbars',
        Toolbars: ['Filter', 'Export'],
      },
    ],
  },
  */
} as PredefinedConfig;

export default async (columnDefs: any[], rowData: any[]) => {
  const gridOptions: GridOptions = {
    columnDefs,
    rowData,
    enableRangeSelection: true,
    sideBar: true,
    suppressMenuHide: true,
    statusBar: {
      statusPanels: [
        { statusPanel: 'agTotalRowCountComponent', align: 'left' },
        { statusPanel: 'agFilteredRowCountComponent' },
      ],
    },
    columnTypes: {
      abColDefNumber: {},
      abColDefString: {},
      abColDefBoolean: {},
      abColDefDate: {},
      abColDefObject: {},
      abColDefNumberArray: {},
    },
  };

  const adaptableOptions: AdaptableOptions = {
    primaryKey: 'OrderId',
    userName: 'Demo User',
    adaptableId: 'User Filters Demo',
    predefinedConfig: demoConfig,
    vendorGrid: { ...gridOptions, modules: AllEnterpriseModules },
  };
  adaptableApi = await Adaptable.init(adaptableOptions);

  return { adaptableOptions, adaptableApi };
};
