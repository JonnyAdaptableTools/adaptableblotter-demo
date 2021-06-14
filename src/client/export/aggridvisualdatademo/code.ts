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
  Dashboard: {
    Tabs: [
      {
        Name: 'Toolbars',
        Toolbars: ['Export'],
      },
    ],
  },
  Export: {
    CurrentReport: 'Visual Data',
    CurrentDestination: 'Excel',
  },
  Filter: {
    ColumnFilters: [
      {
        ColumnId: 'InvoicedCost',
        Predicate: {
          PredicateId: 'GreaterThan',
          Inputs: [600],
        },
      },
    ],
  },
  CustomSort: {
    CustomSorts: [
      {
        ColumnId: 'ShipVia',
        SortedValues: ['United Package', 'Federal Shipping', 'Speedy Express'],
      },
    ],
  },
  Layout: {
    CurrentLayout: 'Grouped',
    Layouts: [
      {
        Columns: [
          'CustomerReference',
          'ContactName',
          'OrderCost',
          'PackageCost',
          'Employee',
          'InvoicedCost',
          'ShipVia',
          'ChangeLastOrder',
        ],
        RowGroupedColumns: ['ShipCountry'],
        ExpandedRowGroupValues: ['France'],
        ColumnSorts: [
          {
            SortOrder: 'Asc',
            ColumnId: 'ShipVia',
          },
        ],
        Name: 'Grouped',
      },
    ],
  },
  ConditionalStyle: {
    ConditionalStyles: [
      {
        Scope: {
          All: true,
        },
        Rule: {
          BooleanExpression: '[ItemCount]> 10 AND [OrderCost] < 1000',
        },
        Style: {
          BackColor: 'LightYellow',
          ForeColor: 'DarkGray',
          FontWeight: 'Bold',
        },
      },
    ],
  },
  FormatColumn: {
    FormatColumns: [
      {
        Scope: {
          ColumnIds: ['Employee'],
        },
        Style: {
          BackColor: 'Brown',
          ForeColor: 'Yellow',
        },
      },
      {
        Scope: {
          DataTypes: ['Number'],
        },
        DisplayFormat: {
          Formatter: 'NumberFormatter',
          Options: {
            FractionDigits: 2,
            Prefix: '$',
          },
        },
        CellAlignment: 'Right',
      },
    ],
  },
} as PredefinedConfig;

export default async (columnDefs: any[], rowData: any[]) => {
  const gridOptions: GridOptions = {
    columnDefs,
    rowData,
    enableRangeSelection: true,
    sideBar: true,
    suppressMenuHide: true,
    rowSelection: 'multiple',
    autoGroupColumnDef: {
      sortable: true,
    },
  };

  const adaptableOptions: AdaptableOptions = {
    primaryKey: 'OrderId',
    userName: 'Demo User',
    adaptableId: 'Visual Data Report Demo',
    exportOptions: {
      exportFormatType: 'formattedValue',
    },
    layoutOptions: {
      includeExpandedRowGroups: true,
    },
    predefinedConfig: demoConfig,
    vendorGrid: { ...gridOptions, modules: AllEnterpriseModules },
  };
  adaptableApi = await Adaptable.init(adaptableOptions);

  return { adaptableOptions, adaptableApi };
};
